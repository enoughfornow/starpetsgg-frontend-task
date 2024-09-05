import { computed } from "vue";


export default function useFormattedValue(value) {
    return computed({
        get() {
            if (value.value) {
                return +value.value.toFixed(2);
            }
        },
        set(newValue) {
            value.value = newValue;
        }
    })
}