import ContactDetails from "@/components/ContactDetails";
import FormElementContactUs from "@/components/FormElementContactus";
import HeroContactUs from "@/components/heroContactUsElement";


export default function ContactUs() {
    return (
    <div className="flex flex-col items-center gap-32">
        <HeroContactUs/>
        <FormElementContactUs/>
        <ContactDetails/>
    </div>

    )

}
