import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import GoogleMapComponent from "@/components/googleMap/GoogleMap";
/**
 * Props for `Map`.
 */
export type MapProps = SliceComponentProps<Content.MapSlice>;

/**
 * Component for "Map" Slices.
 */
const Map = ({ slice }: MapProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GoogleMapComponent />
    </section>
  );
};

export default Map;
