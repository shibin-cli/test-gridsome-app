// 复制文本  返回false表示不支持复制
export const copyText = text => {
    let doc = document.createElement("input")
    doc.value = text
    document.body.appendChild(doc)
    doc.select()
    let status = document.execCommand("copy")
    document.body.removeChild(doc)
    return status
}