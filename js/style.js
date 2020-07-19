const result_txt = document.getElementById('result');
const json_txt = document.getElementById('textarea');
function decode() {
    if ('' != json_txt.value) try {
        const parse = JSON.parse(json_txt.value);
        const stringify = JSON.stringify(parse, null, 2);
        json_txt.value = stringify, result_txt.textContent = '整形しました';
    } catch {
        result_txt.textContent = '整形出来ませんでした';
    }
};
function reset() {
    result_txt.textContent = '';
    json_txt.value = '';
}
document.getElementById('decode').onclick = function () { decode(); };
document.getElementById('reset').onclick = function () { reset(); };