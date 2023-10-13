import "./styles.css" assert { type: 'css' };

const onClickAdd = () => {
    // テキストボックスの値を取得し初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    
    // divタグ生成
    const div = document.createElement("div");
    div.className = "todo";

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div)を未完了リストから削除
        const deleteTODO = deleteButton.parentNode;
        document.getElementById("uncomplete-list").removeChild(deleteTODO);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("uncomplete-list").append(div);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());