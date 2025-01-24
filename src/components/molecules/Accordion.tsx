import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionData } from "../../data/accordionData";

export const Accordion1 = () => {
  return (
    <div className="mt-6 w-96">
      {accordionData.map((item, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            sx={{ backgroundColor: "#F5F2EC" }} // Стиль вынесен наружу map
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#F5F2EC" }}>
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
