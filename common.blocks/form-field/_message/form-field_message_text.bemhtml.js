block('form-field').mod('message', 'text')(
    content()(function() {
        var ctx = this.ctx;

        return [
            applyNext(),
            {
                block : 'message',
                mods : { type : 'text', theme : this.mods.theme },
                mix : { block : this.block, elem : 'message' }
            }
        ];
    })
);
