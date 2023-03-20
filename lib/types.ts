export interface IData {
  sonTarihField: string;
  sonSaatField: string;
  sonDolulukOraniField: number;
  sonHacimField: string;
  gunlukOranDegisimiField: string;
  gunlukHacimDegisimiField: string;
  haftalikOranDegisimiField: string;
  haftalikHacimDegisimiField: string;
  grafikler: IDataGrafikler[];
}

interface IDataGrafikler {
  veriListeleriField: any[][];
  idField: number;
  adiField: string;
  barajAdiField: any;
  biriktirmeHacmiField?: string;
}
