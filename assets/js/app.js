const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '600px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    // Avoid any default panel
    // panels: {defaults: []},

});

editor.on('load', () => {
    const updateComp = (component) => {
        console.log(component)
        if (component) {
            component.set({
                removable: false,
            })
        }
        component.get('components').each(c => updateComp(c))
    }
    if (editor.domComponents) {
        editor.domComponents.getComponents().each(c => updateComp(c))
    }

});

// const updateComp = (component) => {
//     console.log(component)
//     if (component) {
//         component.set({
//             removable: false,
//         })
//     }
//     component.get('components').each(c => updateComp(c))
// }
// if (editor.Components) {
//     editor.Components.each(c => updateComp(c))
// }
