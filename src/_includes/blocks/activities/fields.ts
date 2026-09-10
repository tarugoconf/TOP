import { theme } from "../cms.ts";

export default {
  type: "object",
  name: "activities",
  fields: [
    "title: text",
    "id: text",
    "description: markdown",
    theme,
    {
      type: "object-list",
      name: "items",
      label: "Activities",
      fields: [
        "title: text",
        "tags: list",
        {
          type: "file",
          name: "img",
          label: "Image",
          upload: "uploads:logos",
        },
        "description: text",
        {
          type: "checkbox",
          name: "wide",
          label: "Double width",
          description:
            "Span two columns to give it more importance (single column on small screens)",
        },
        {
          type: "select",
          name: "style",
          label: "Style",
          description: "Alternative style to make it stand out",
          value: "",
          options: [
            { label: "Default", value: "" },
            { label: "Solid shadow", value: "is-shadow" },
            { label: "Primary color", value: "is-primary" },
            { label: "Secondary color", value: "is-secondary" },
            { label: "Dark", value: "is-dark" },
            { label: "Light", value: "is-light" },
          ],
        },
      ],
    },
  ],
};
