A simple, extensible rich text editor for the browser.

The core file is very minimal in features, but there are a number of plugins.

JQuery methods:

* .wordframe(): initiates editors on all matching elements

* .wordframe('getContents'): return HTML string of the editor's contents (works for single instance only).

Plugins API:
(all functions part of the $.wordframe object)

* addButton(buttonName, buttonObject [,indexAt])

* removeButton(buttonName)

* replaceButton(oldName, newName, newButtonObject)

* rebuildMenu(dataObject)
