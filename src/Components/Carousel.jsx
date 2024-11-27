import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    name: "John Doe",
    position: "Chief Strategy Officer @ Company",
  },
  {
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    name: "Jane Smith",
    position: "CEO @ ExampleCorp",
  },
  {
    text: "Nulla facilisi. Curabitur vehicula, risus at suscipit sodales, nisi massa euismod est.",
    name: "Michael Brown",
    position: "Product Manager @ TechInc",
  },
];

const TestimonialCarousel = () => {
  const theme = useTheme();
  const [current, setCurrent] = React.useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-deepJungleGreen">
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          borderRadius: 2,
          maxWidth: 600,
          margin: "auto",
          position: "relative",
          color: "#fff",
        }}
      >
        {/* বাম পাশের বাটন */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: -40, // বাটন পজিশন সেট করা
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#1a2a37",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#314355",
            },
          }}
        >
          <ArrowBackIos className="text-electricCyan" />
        </IconButton>

        {/* টেক্সট এবং তথ্য */}
        <Box>
          {/* ইমেজটি সেন্টারে রাখা */}
          <img
            src="/group.png"
            alt="testimonial"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              margin: "0 auto",
              display: "block",
              border: "2px solid #4f6c86",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              margin: "20px 0 10px",
            }}
          >
            "{testimonials[current].text}"
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold" }}
            className="text-electricCyan"
          >
            {testimonials[current].name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#7a8e9d" }}>
            {testimonials[current].position}
          </Typography>
        </Box>

        {/* ডান পাশের বাটন */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -40, // ডান পজিশন সেট করা
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#1a2a37",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#314355",
            },
          }}
        >
          <ArrowForwardIos className="text-electricCyan" />
        </IconButton>
      </Box>
    </div>
  );
};

export default TestimonialCarousel;
