import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import During from "@/components/during/During";
/**
 * Props for `DuringTherapy`.
 */
export type DuringTherapyProps =
  SliceComponentProps<Content.DuringTherapySlice>;

/**
 * Component for "DuringTherapy" Slices.
 */
const DuringTherapy = ({ slice }: DuringTherapyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <During slice={slice} />
    </section>
  );
};

export default DuringTherapy;
