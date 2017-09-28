block('form').mod('message', 'popup')(
    content()(function() {
        var ctx = this.ctx;

        return [
            applyNext(),
            {
                block : 'message',
                mods : {
                    type : 'popup',
                    theme : this.mods.theme,
                    size : this.mods.size
                },
                mix : { block : this.block, elem : 'message' },
                directions : this.ctx.directions
            }
        ];
    })
);
