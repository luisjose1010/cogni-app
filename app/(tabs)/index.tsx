import { Screen } from "@/components/Screen";
import { ProgressCard } from "@/components/ui/ProgressCard";

export default function HomeScreen() {

  return (
    <Screen>
      <ProgressCard
        title="Hello, World!"
        subtitle="Welcome to the app"
        value="75%"
        progress={0.75}
        chipText="+5% esta semana"
        showChip={true}
      />
    </Screen>
  );
}
