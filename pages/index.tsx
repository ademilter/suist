import { useContext } from "react";
import { CommonStoreContext } from "@/stores/common";
import dynamic from "next/dynamic";
import Container from "@/components/container";
import Box from "@/components/box";

const GaugeChartMevcutDurum = dynamic(
  () => import("@/components/charts/mevcut-durum"),
  {
    ssr: false,
  }
);

const BarChartSon14Gun = dynamic(
  () => import("@/components/charts/son-14-gun"),
  {
    ssr: false,
  }
);
const BarChartBarajDolulukOrani = dynamic(
  () => import("@/components/charts/baraj-doluluk-orani"),
  {
    ssr: false,
  }
);

const BarajSuDagilimi = dynamic(
  () => import("@/components/charts/baraj-su-dagilimi"),
  {
    ssr: false,
  }
);

export default function Index() {
  const { data, appLoading } = useContext(CommonStoreContext);

  const dataSon14Gun = data?.grafikler.find(item => {
    return item?.idField === 1;
  });

  const dataBarajSuDagilimi = data?.grafikler.find(item => {
    return item?.idField === 11;
  });

  const dataBarajDolulukOrani = data?.grafikler.find(item => {
    return item?.idField === 12;
  });

  if (appLoading) return <div>Loading...</div>;

  return (
    <div className="py-4 text-center md:py-6">
      <Container>
        <div className="grid gap-4 md:gap-6">
          <Box>
            <header>
              <h2 className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-lg">
                Toplam Doluluk Oranı
              </h2>
            </header>

            <GaugeChartMevcutDurum value={data?.sonDolulukOraniField} />

            <BarChartSon14Gun
              labels={[...(dataSon14Gun?.veriListeleriField[0] || [])].splice(
                5
              )}
              values={[...(dataSon14Gun?.veriListeleriField[1] || [])].splice(
                5
              )}
            />
          </Box>

          <Box>
            <header>
              <h2 className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-lg">
                Barajlara Göre
              </h2>
            </header>

            <h4 className="opacity-60">Su Miktarının Dağılımı</h4>
            <BarajSuDagilimi
              data={
                dataBarajSuDagilimi?.veriListeleriField as [string, number][]
              }
            />

            <h4 className="opacity-60">Doluluk Oranı</h4>
            <BarChartBarajDolulukOrani
              labels={[
                ...(dataBarajDolulukOrani?.veriListeleriField[0] || []),
              ].splice(1)}
              values={[
                ...(dataBarajDolulukOrani?.veriListeleriField[1] || []),
              ].splice(1)}
            />
          </Box>
        </div>
      </Container>
    </div>
  );
}
