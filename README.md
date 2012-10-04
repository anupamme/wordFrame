A simple, extensible rich text editor for the browser.

The core file is very minimal in features, but there are a number of plugins.

JQuery methods:

* .wordFrame(config): initiates editors on all matching elements.

* .wFTextAreaFocus(): set focus on the text area.

* .wFGetContents(): return HTML string of the editor's contents (works for single instance only).

Plugins API:
(all functions part of the $.wordFrame object)

* addButton(buttonObject [,indexAt])

* removeButton(buttonName)

* replaceButton(oldName, newButtonObject)

* buildMenu()
