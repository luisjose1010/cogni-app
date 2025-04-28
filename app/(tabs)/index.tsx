import AwardIcon from "@/assets/icons/Award";
import BrainIcon from "@/assets/icons/Brain";
import ClockIcon from "@/assets/icons/Clock";
import ZapIcon from "@/assets/icons/Zap";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { ThemedScroll } from "@/components/ThemedScroll";
import { ProgressCard } from "@/components/ui/ProgressCard";

const data = {
  total: {
    change: 5,
  },
  memory: {
    value: 80,
  },
  attention: {
    value: 67,
  },
  speed: {
    value: 90,
  },
  flexibility: {
    value: 85,
  },
}

export default function HomeScreen() {
  const totalValue = (
    data.memory.value +
    data.attention.value +
    data.speed.value +
    data.flexibility.value
  ) / 4;

  return (
    <Screen>
      <Header title="Resumen de Progreso" />

      <ThemedScroll>
        <ProgressCard
          title="Puntuación cognitiva"
          subtitle="Tu rendimiento general"
          suffix="/100"
          value={parseFloat(totalValue.toFixed(1))}
          change={data.total.change}
        />

        <ProgressCard
          title="Memoria"
          value={data.memory.value}
          color="#F3E8FF"
          Icon={BrainIcon}
        />

        <ProgressCard
          title="Atención"
          value={data.attention.value}
          color="#FEF3C7"
          Icon={ZapIcon}
        />

        <ProgressCard
          title="Velocidad"
          value={data.speed.value}
          color="#DBEAFE"
          Icon={ClockIcon}
        />

        <ProgressCard
          title="Flexibilidad"
          value={data.flexibility.value}
          color="#D1FAE5"
          Icon={AwardIcon}
        />
      </ThemedScroll>
    </Screen>
  );
}
