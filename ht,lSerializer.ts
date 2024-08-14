import * as prismich from "@prismicio/helpers";
export const htmlParser: prismich.HTMLMapSerializer = {
  span: ({ children }) => `<span className="text-alt">${children}</span>`,
};
