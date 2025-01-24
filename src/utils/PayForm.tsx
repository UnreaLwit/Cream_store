import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import useCartStore from "../context/ZustandContext";

type TFormData = {
  name: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const isValidLuhn = (cardNumber: string): boolean => {
  const cleanCardNumber = cardNumber.replace(/\D/g, "");
  if (!/^\d+$/.test(cleanCardNumber)) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = cleanCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanCardNumber.charAt(i), 10);
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

export const PayForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<TFormData>({
    defaultValues: {
      name: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const { cartItems, clearCart } = useCartStore();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const cardNumberValue = watch("cardNumber");
  const expiryDateValue = watch("expiryDate");
  const cvvValue = watch("cvv");
  const [showCVV, setShowCVV] = useState(false);

  const onSubmit: SubmitHandler<TFormData> = (_data) => {
    if (cartItems.length !== 0) {
      setOpen(true);
      clearCart();
      reset();
    }
  };

  const handleClose = () => {
    setOpen(true);
    navigate("/");
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1-")
      .slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{0,2})/, "$1/$2")
      .slice(0, 5);
  };

  const formatCVV = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 4);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000/30",
    borderRadius: 2,
    boxShadow: 128,
    p: 4,
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-auto p-4 max-w-md"
    >
      <TextField
        label="Имя"
        color="success"
        {...register("name", {
          required: "Имя обязательно к заполнению",
          minLength: {
            value: 2,
            message: "Имя должно содержать минимум 2 символа",
          },
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        color="success"
        {...register("email", {
          required: "Email обязателен к заполнению",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Некорректный email",
          },
        })}
        type="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Номер карты"
        color="success"
        {...register("cardNumber", {
          required: "Номер карты обязателен",
          validate: {
            format: (value) =>
              /^\d{4}[-]?\d{4}[-]?\d{4}[-]?\d{4}$/.test(
                value.replace(/-/g, "")
              ) || "Некорректный формат номера карты",
            luhn: (value) =>
              isValidLuhn(value.replace(/\D/g, "")) ||
              "Некорректный номер карты",
          },
        })}
        value={cardNumberValue}
        onChange={(e) => {
          setValue("cardNumber", formatCardNumber(e.target.value));
        }}
        inputProps={{ maxLength: 19 }}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Дата истечения (MM/ГГ)"
        color="success"
        {...register("expiryDate", {
          required: "Дата истечения обязательна",
          validate: {
            format: (value) =>
              /^(0[1-9]|1[0-2])\/\d{2}$/.test(value) ||
              "Некорректный формат даты (MM/ГГ)",
            expiry: (value) => {
              if (!value) return false;
              const [month, year] = value.split("/").map(Number);
              const currentYear = new Date().getFullYear() % 100;
              const currentMonth = new Date().getMonth() + 1;

              if (
                year < currentYear ||
                (year === currentYear && month < currentMonth)
              ) {
                return "Срок действия карты истек";
              } else {
                return true;
              }
            },
          },
        })}
        value={expiryDateValue}
        onChange={(e) => {
          setValue("expiryDate", formatExpiryDate(e.target.value));
        }}
        inputProps={{ maxLength: 5 }}
        error={!!errors.expiryDate}
        helperText={errors.expiryDate?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="CVV"
        color="success"
        {...register("cvv", {
          required: "CVV обязателен",
          pattern: {
            value: /^\d{3,4}$/,
            message: "CVV должен содержать 3 или 4 цифры",
          },
        })}
        value={cvvValue}
        onChange={(e) => {
          setValue("cvv", formatCVV(e.target.value));
        }}
        inputProps={{ maxLength: 4 }}
        error={!!errors.cvv}
        helperText={errors.cvv?.message}
        fullWidth
        margin="normal"
        type={showCVV ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowCVV(!showCVV)}
                edge="end"
              >
                {showCVV ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <div>
        <div className="flex justify-center mt-2">
          <Stack spacing={2} direction="row">
            <Button color="success" variant="contained" type="submit">
              Заказать
            </Button>
          </Stack>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="text-center"
              id="modal-modal-title"
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "montserrat",
                fontWeight: "bold",
              }}
            >
              Спасибо за заказ!
            </Typography>
            <Typography
              className="text-center"
              id="modal-modal-description"
              variant="h6"
              sx={{
                mt: 2,
                fontFamily: "montserrat",
                fontWeight: "bold",
              }}
            >
              Мы скоро свяжемся с вами.
            </Typography>
          </Box>
        </Modal>
      </div>
    </form>
  );
};
