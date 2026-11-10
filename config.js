// 設定檔：只需要在這裡填一次，之後更新 index.html 不用再改設定。

// 1) Apps Script「網頁應用程式」的 /exec 網址（保留前後的單引號）
const API_URL = 'https://script.google.com/macros/s/AKfycbzKooPEndxmn5udON4cPYeuv-26i_dlnQlteV92C0Q1mDZquARI0N0a9cT5s2stXvIV/exec';

// 2) 只接受這些開頭的條碼，避免標籤上的另一個條碼被一起記進去。
//    目前設定為只接受「4」開頭；要加其他開頭可寫成 ['4', '2']；改成 [] 代表全部接受。
const SCAN_PREFIXES = ['4', '3', '9'];
