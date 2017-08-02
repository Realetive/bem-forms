block('form-field')(

    addJs()(true),

    def()(function() {
        var _form_field = this.ctx;
        _form_field.id = _form_field.id || this.generateId();
        this.ctx.js = this.extend(this.ctx.js || {}, { id : _form_field.id });

        _form_field.mods = _form_field.mods || {};

        return applyNext({ _form_field : _form_field });
    }),

    addAttrs()(function () {
        return {
            'data-name' : this.ctx.name
        };
    })

);
