import { useContext } from "react";
import { CommonStoreContext } from "@/stores/common";
import dynamic from "next/dynamic";
import Container from "@/components/container";
import Box from "@/components/box";
import { DateTime } from "luxon";

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
  if (!data) return null;

  return (
    <div className="pt-6 py-40 text-center md:pt-8">
      <Container>
        <div className="grid gap-6 md:gap-8">
          <Box>
            <h2 className="opacity-60">Toplam Doluluk Oranı</h2>

            <GaugeChartMevcutDurum value={data.sonDolulukOraniField} />

            {/*<h2 className="opacity-60">Son 10 Gün</h2>*/}

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
            <h2 className="opacity-60">
              Toplam Miktarın Barajlara Göre Dağılımı
            </h2>

            <BarajSuDagilimi
              data={
                dataBarajSuDagilimi?.veriListeleriField as [string, number][]
              }
            />

            <h2 className="opacity-60">Barajların Doluluk Oranı</h2>

            <BarChartBarajDolulukOrani
              labels={[
                ...(dataBarajDolulukOrani?.veriListeleriField[0] || []),
              ].splice(1)}
              values={[
                ...(dataBarajDolulukOrani?.veriListeleriField[1] || []),
              ].splice(1)}
            />
          </Box>

          <div className="text-sm opacity-50">
            <p>
              Bu sayfadaki veriler{" "}
              <a
                className="underline"
                href="https://www.iski.istanbul/web/tr-TR/baraj-doluluk"
                target="_blank"
              >
                İSKİ
              </a>
              &apos;nin web sitesinden alınmıştır.
            </p>
            <p>
              Son Güncelleme:{" "}
              {DateTime.fromFormat(
                `${data.sonTarihField} ${data.sonSaatField}`,
                "dd.MM.yyyy HH:mm"
              ).toRelative()}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
