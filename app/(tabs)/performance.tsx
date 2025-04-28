import { ScrollView, ScrollViewBase, StyleSheet, View } from "react-native";

import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/ThemedText";
import { Card } from "@/components/ui/Card";
import { CategoryScoreChart } from "@/components/ui/charts/CategoryScoreChart";
import { Header } from "@/components/Header";
import { ThemedScroll } from "@/components/ThemedScroll";

const totalScore = 75;
const changePoints = 2.5;
const changePercentage = 3.5;

const data = [
  {
    "memory": 46,
    "attention": 82,
    "speed": 47,
    "flexibility": 82,
    "day": "03/27"
  },
  {
    "memory": 43,
    "attention": 81,
    "speed": 51,
    "flexibility": 77,
    "day": "03/28"
  },
  {
    "memory": 43,
    "attention": 80,
    "speed": 52,
    "flexibility": 72,
    "day": "03/29"
  },
  {
    "memory": 45,
    "attention": 75,
    "speed": 51,
    "flexibility": 73,
    "day": "03/30"
  },
  {
    "memory": 40,
    "attention": 79,
    "speed": 49,
    "flexibility": 74,
    "day": "03/31"
  },
  {
    "memory": 45,
    "attention": 80,
    "speed": 51,
    "flexibility": 74,
    "day": "04/01"
  },
  {
    "memory": 43,
    "attention": 80,
    "speed": 53,
    "flexibility": 73,
    "day": "04/02"
  },
  {
    "memory": 39,
    "attention": 75,
    "speed": 50,
    "flexibility": 76,
    "day": "04/03"
  },
  {
    "memory": 39,
    "attention": 75,
    "speed": 46,
    "flexibility": 78,
    "day": "04/04"
  },
  {
    "memory": 37,
    "attention": 73,
    "speed": 42,
    "flexibility": 83,
    "day": "04/05"
  },
  {
    "memory": 35,
    "attention": 73,
    "speed": 41,
    "flexibility": 86,
    "day": "04/06"
  },
  {
    "memory": 38,
    "attention": 68,
    "speed": 46,
    "flexibility": 85,
    "day": "04/07"
  },
  {
    "memory": 37,
    "attention": 66,
    "speed": 48,
    "flexibility": 85,
    "day": "04/08"
  },
  {
    "memory": 39,
    "attention": 65,
    "speed": 47,
    "flexibility": 87,
    "day": "04/09"
  },
  {
    "memory": 43,
    "attention": 65,
    "speed": 46,
    "flexibility": 88,
    "day": "04/10"
  },
  {
    "memory": 44,
    "attention": 69,
    "speed": 43,
    "flexibility": 87,
    "day": "04/11"
  },
  {
    "memory": 43,
    "attention": 74,
    "speed": 47,
    "flexibility": 85,
    "day": "04/12"
  },
  {
    "memory": 40,
    "attention": 72,
    "speed": 47,
    "flexibility": 82,
    "day": "04/13"
  },
  {
    "memory": 39,
    "attention": 72,
    "speed": 45,
    "flexibility": 79,
    "day": "04/14"
  },
  {
    "memory": 40,
    "attention": 76,
    "speed": 41,
    "flexibility": 84,
    "day": "04/15"
  },
  {
    "memory": 38,
    "attention": 71,
    "speed": 43,
    "flexibility": 79,
    "day": "04/16"
  },
  {
    "memory": 36,
    "attention": 68,
    "speed": 43,
    "flexibility": 82,
    "day": "04/17"
  },
  {
    "memory": 40,
    "attention": 64,
    "speed": 40,
    "flexibility": 87,
    "day": "04/18"
  },
  {
    "memory": 38,
    "attention": 67,
    "speed": 45,
    "flexibility": 86,
    "day": "04/19"
  },
  {
    "memory": 39,
    "attention": 72,
    "speed": 50,
    "flexibility": 83,
    "day": "04/20"
  },
  {
    "memory": 38,
    "attention": 73,
    "speed": 51,
    "flexibility": 79,
    "day": "04/21"
  },
  {
    "memory": 42,
    "attention": 74,
    "speed": 53,
    "flexibility": 84,
    "day": "04/22"
  },
  {
    "memory": 39,
    "attention": 69,
    "speed": 55,
    "flexibility": 87,
    "day": "04/23"
  },
  {
    "memory": 36,
    "attention": 66,
    "speed": 54,
    "flexibility": 84,
    "day": "04/24"
  },
  {
    "memory": 38,
    "attention": 61,
    "speed": 49,
    "flexibility": 85,
    "day": "04/25"
  }
];

export default function PerformanceScreen() {

  return (
    <Screen>
      <Header title="Puntuaciones Cognitivas" subtitle="Evolución de puntuaciones" />

      <Card title="Puntuaciones por Categoría" subtitle="Comparativa de habilidades cognitivas">
        <CategoryScoreChart data={data} style={styles.chart} />
      </Card>

      <Card title="Puntuación Total" subtitle="Rendimiento cognitivo general">
        <View style={styles.totalCard}>
          <View>
            <ThemedText type="defaultSemiBold" style={styles.totalScore}>
              {totalScore}
            </ThemedText>
            <ThemedText type="caption">
              {changePoints < 0 || "+"}{changePoints} pts desde la última semana
            </ThemedText>
          </View>
          <View style={[styles.percentageItem , { backgroundColor: changePercentage < 0 ? "#FEE2E2" : "#DCFCE7" }]}>
            <ThemedText type="subtitle" style={{ color: changePercentage < 0 ? "#B91C1C" : "#166534" }}>
              {changePercentage < 0 || "+"}{parseFloat(changePercentage.toFixed(1))}%
            </ThemedText>
          </View>
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    margin: 0,
    width: "100%",
  },
  chart: {
    height: 275,
  },
  totalCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  totalScore: {
    fontSize: 30,
    lineHeight: 32,
  },
  percentageItem: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    top: "-50%",
    borderRadius: 100,
    aspectRatio: 1,
    width: 70,
  },
});
