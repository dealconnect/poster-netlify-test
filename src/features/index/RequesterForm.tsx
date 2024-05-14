import Input from "./components/Input/component";
import Textarea from "./components/Textarea/component";

const RequesterForm = () => {
  return (
    <>
      <h5 className="text-lg font-semibold text-gray-700 mb-4">依頼者情報</h5>
      <Input name="requester_company_name" label="依頼会社名" placeholder="入力してください" />
      <Input name="requester_name" label="依頼者名" placeholder="入力してください" />
      <Input name="requester_phone" label="電話番号" placeholder="入力してください" type="tel" />
      <Input name="requester_email" label="メールアドレス" placeholder="入力してください" type="email" />
      <Textarea name="comment" label="留意事項" placeholder="車両の制限など留意すべき点や回収時の希望等があればご入力ください。"  />
    </>
  );
};

export default RequesterForm;
