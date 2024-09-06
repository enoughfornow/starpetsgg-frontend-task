import { UISelectTypes } from "@/ui";
import { types } from "entities/currency";


export default function useCurrencyRate(currencyList: types.ICurrencyList, selectedCurrency: UISelectTypes.ESelectTypes) {
    const result = {};
    Object.entries(currencyList).forEach(([key, value]) => {
        const [base, quote] = key.split('-');
        if (base === selectedCurrency) {
            result[quote] = value;
        }
    });
    return result;
}