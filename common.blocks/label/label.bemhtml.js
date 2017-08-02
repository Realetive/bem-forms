block('label')(

    tag()('label'),

    addAttrs()(function() {
        return { for : this.ctx.for };
    }),

    match(function() { return this._form_field; }).def()(function() {
        this.mods.disabled = this._form_field.mods.disabled;

        return applyNext();
    }),

    match(function() { return this._form_field; }).addAttrs()(function() {
        return { for : this._form_field.id };
    })

);
