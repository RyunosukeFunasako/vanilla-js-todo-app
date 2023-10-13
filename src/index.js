import "./styles.css" assert { type: 'css' };

const onClickAdd = () => {
    // テキストボックスの値を取得し初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createUncompleteList(inputText);
};
    
// 未完了リストに要素を追加
const createUncompleteList = (todo) => {
    // divタグ生成
    const div = document.createElement("div");
    div.className = "todo";

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = todo;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親タグ(div)を未完了リストから削除
        deleteFromUncompleteList(completeButton.parentNode);

        // 完了リストに追加する要素(div)
        const completeDiv = completeButton.parentNode;

        // 完了したTODOを取得
        const completeTODO = completeDiv.firstElementChild.innerText;

        // 完了したTODOのdivタグを初期化
        completeDiv.textContent = null;

        // liタグ生成
        const li = document.createElement("li");
        li.innerText = completeTODO;

        // button(戻す)タグ生成
        const returnButton = document.createElement("button");
        returnButton.innerText = "戻す";
        returnButton.addEventListener("click", () =>{
            // 未完了リストに戻す要素(div)
            const returnDiv = returnButton.parentElement;

            // 押された戻すボタンの親タグ(div)を完了リストから削除
            document.getElementById("complete-list").removeChild(returnDiv);

            // 戻すTODOを取得
            const returnTODO = returnDiv.firstElementChild.innerText;
            createUncompleteList(returnTODO);
        });

        // divタグの子要素に各要素を設定
        completeDiv.appendChild(li);
        completeDiv.appendChild(returnButton);

        // 完了リストに追加
        document.getElementById("complete-list").append(completeDiv);
    });

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div)を未完了リストから削除
        deleteFromUncompleteList(deleteButton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("uncomplete-list").append(div);
};

// 未完了リストから指定の要素を削除
const deleteFromUncompleteList = (target) => {
    document.getElementById("uncomplete-list").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());