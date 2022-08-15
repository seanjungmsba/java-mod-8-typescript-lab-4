const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("spaceSize") as HTMLInputElement;
const input2 = document.getElementById("stringValue") as HTMLInputElement;

function prepend<T>(array: T[]) {
    // https:// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    return " ".repeat(+array[0]) + array[1];
}

button!.addEventListener("click", function () {
    console.log(prepend([input1!.value, input2!.value]));
});