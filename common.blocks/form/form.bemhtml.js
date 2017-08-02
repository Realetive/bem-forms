block('form')(

    tag()('form'),

    addJs()(true),

    addAttrs()(function() {
        var ctx = this.ctx;

        return {
            novalidate : true,
            action : ctx.action,
            enctype : ctx.enctype,
            method : ctx.method
        };
    })

);
