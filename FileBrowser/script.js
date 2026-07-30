document.addEventListener('DOMContentLoaded', () => {
    const fileBrowser = document.getElementById('file-browser');

    // 示例文件夹和文件数据
    const fileData = [
        { name: "Folder 1", type: "folder" },
        { name: "FExcel.xlsx", type: "file", link: "downloads/Excel.xlsx" },
        { name: "更改数据源与刷新 .xlsx", type: "file", link: "downloads/更改数据源与刷新 .xlsx" },
        { name: "Folder 2", type: "folder" },
        { name: "字段项 .xlsx", type: "file", link: "downloads/字段项 .xlsx" },
        { name: "活动字段设置 .xlsx", type: "file", link: "downloads/活动字段设置 .xlsx" }
    ];

    // 渲染文件和文件夹列表
    fileData.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        if (file.type === 'folder') {
            fileItem.innerHTML = `
                <span>📁 ${file.name}</span>
                <span>Open</span>
            `;
        } else if (file.type === 'file') {
            fileItem.innerHTML = `
                <span>📄 ${file.name}</span>
                <a href="${file.link}" download>Download</a>
            `;
        }

        fileBrowser.appendChild(fileItem);
    });
});
