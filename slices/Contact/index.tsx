import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactComp from "@/components/contact/ContactComp";
/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContactComp slice={slice} />
    </section>
  );
};

export default Contact;
