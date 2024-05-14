import { useFormContext } from "react-hook-form";
import { Schema } from "./schema";
import Input from "./components/Input/component";
import Select from "./components/Select/component";
import MultipleDate from "./components/MultipleDate/component";

const RequestForm = () => {
  const { register, formState } = useFormContext<Schema>()
  
  return (
    <div>
      <h5 className="text-lg font-semibold text-gray-700 mb-4">回収依頼内容</h5>

      <MultipleDate name="desired_pickup_date" label="希望日時" placeholder="例）9月22日または9月23日" />
      <Select name="desired_pickup_period" label="希望時間帯" placeholder="選択してください">
        <option selected disabled value="">選択してください</option>
        <option value="am">午前</option>
        <option value="pm">午後</option>
        <option value="alltime">終日可能</option>
        <option value="other">その他（留意事項に記載してください）</option>
      </Select>
      <Input name="number_of_trucks" label="希望台数" placeholder="入力してください" type='number' />
      <Select name="kind_of_truck" label="希望車種" placeholder="選択してください">
        <option selected disabled value="">選択してください</option>
        <option value="平ボディ">平ボディ</option>
        <option value="クレーン付き平ボディ">クレーン付き平ボディ</option>
        <option value="ダンプ">ダンプ</option>
        <option value="コンテナ">コンテナ</option>
        <option value="other">その他（留意事項に記載してください）</option>
      </Select>
      <Input name="site_name" label="回収場所名" placeholder="例）OX金属株式会社 本社工場" />
      <Input name="site_address" label="回収先住所" placeholder="例）東京都千代田区飯田橋3丁目42-1" />
      <Input name="cargo_details" label="回収品目" placeholder="例）ロッカー30個" />
    </div>
  );
};

export default RequestForm;
