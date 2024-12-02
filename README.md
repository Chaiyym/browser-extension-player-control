# Player Control 扩展程序

## 介绍
Player Control 是一个浏览器扩展程序，旨在提供视频画中画（PiP）功能的便捷控制。通过此扩展，用户可以轻松地开启或关闭画中画模式，并且能够快速跳过或回退视频内容。

## 功能
- **开启/关闭画中画**：使用快捷键 `Alt+1` 切换画中画模式。
- **播放/暂停**：使用快捷键 `Alt+2`。
- **向前跳过5秒**：按下 `Alt+3` 。
- **向后回退5秒**：通过 `Alt+4` 。
- **切换画中画tab页**：通过触发扩展popup页面的 `re_bind按钮` 。

## 安装
1. 确保您的浏览器支持 WebExtensions API。
2. 下载本扩展的所有文件到本地。
3. 在浏览器设置中启用开发者模式。
4. 选择“加载未打包扩展”选项，然后选择下载的扩展目录来安装。

## 使用方法
- 安装完成后，您可以通过右上角的扩展图标访问快速操作界面。
- 您也可以直接使用上述定义的键盘快捷键来控制视频播放。

## 技术栈
- **manifest_version 3**：遵循最新版本的WebExtensions标准，确保更好的兼容性和安全性。


## 注意事项
- 请确保目标网站支持HTML5视频播放器，否则某些功能可能无法正常工作。
- 部分网站可能因为CSP（Content Security Policy）限制而阻止扩展程序的功能，请检查网站的安全策略。
- 本扩展程序仅作为学习交流用途，请遵守相关法律法规及网站使用条款。

## 联系方式
如果您在使用过程中遇到问题或有任何建议，欢迎联系作者 chaiyym。感谢您的支持！

---

这份README文档提供了关于Player Control扩展程序的基本信息、如何安装使用以及技术实现概览。希望它能帮助用户更好地理解和利用这个工具。