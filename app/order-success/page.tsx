import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export const metadata = {
  title: "تم استلام طلبك"
};

export default function OrderSuccessPage() {
  return (
    <section className="grid min-h-[70svh] place-items-center px-4 py-16">
      <div className="max-w-xl rounded-lg bg-white p-8 text-center shadow-luxe ring-1 ring-zinc-200">
        <CheckCircle2 className="mx-auto mb-5 text-green-600" size={58} />
        <h1 className="text-4xl font-black">شكراً لك</h1>
        <p className="mt-4 leading-8 text-zinc-700">
          تم استلام طلبك بنجاح. سيتواصل معك فريق M-R قريباً لتأكيد تفاصيل التوصيل.
        </p>
        <div className="mt-7">
          <ButtonLink href="/">العودة للرئيسية</ButtonLink>
        </div>
      </div>
    </section>
  );
}
