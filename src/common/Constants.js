export const MAPPING = {
    "預約": 1,
    "診所": 2,
    "日曆": 3,
    "會員": 4,
    "訂藥": 5,
    "患者": 6,
}

export const PAGES = ["預約", "診所", "日曆", "會員", "訂藥", "患者"];
export const PAGESMAP = new Map();
PAGESMAP.set(1, [
    "預約",
    "天灸",
    "初診登記",
    "遙距初診登記",
    "天灸預約系統",
]);
PAGESMAP.set(2, [
    "總覽",
    "工作記錄",
    "費用報銷",
    "飯錢",
    "聯絡簿",
    "福利及津貼",
    "診所",
    "管理",
]);

PAGESMAP.set(3, []);

PAGESMAP.set(4, [
    "會員",
    "辦理入會",
    "埋數",
]);

PAGESMAP.set(5, [
]);

PAGESMAP.set(6, [
    "添加患者",
    "患者列表",
]);
