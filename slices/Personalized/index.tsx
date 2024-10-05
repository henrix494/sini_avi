import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PersonalizedComp from "@/components/Personalized/PersonalizedComp";
import During from "@/components/during/During";
/**
 * Props for `Personalized`.
 */
export type PersonalizedProps = SliceComponentProps<Content.PersonalizedSlice>;

/**
 * Component for "Personalized" Slices.
 */
const Personalized = ({ slice }: PersonalizedProps): JSX.Element => {
  return (
    <section
      id={slice.primary.ids || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PersonalizedComp slice={slice} />
    </section>
  );
};

export default Personalized;
