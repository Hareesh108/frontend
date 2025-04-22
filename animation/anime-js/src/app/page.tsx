import BouncyText from "@/components/bouncy";
import Lerpe from "@/components/lerpe";
import Stagger from "@/components/stagger";
import Timeline from "@/components/timeline";
import Timer from "@/components/timer";
import TimerToggle from "@/components/timer-togger";

export default function Page() {
  return (
    <>
      <Timer />
      <BouncyText />
      <Timeline />
      <Stagger />
      <Lerpe />
      <TimerToggle />
    </>
  );
}
