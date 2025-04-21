import BouncyText from "@/components/bouncy";
import Lerpe from "@/components/lerpe";
import Stagger from "@/components/stagger";
import Timeline from "@/components/timeline";
import Timer from "@/components/timer";

export default function Page() {
  return (
    <>
      <Timer />
      <BouncyText />
      <Timeline />
      <Stagger />
      <Lerpe />
    </>
  );
}
