CRC.ns('CRC.views.ProductDetailView');
CRC.views.ProductDetailView = Class.extend(CRC.util.Observable, {

    initialize: function() {
        this._product = null;
        var me = this;

        $('#detailAdd').click(function() {
            me.fireEvent('addToCartClicked', [me._product]);
            return false;
        });

        $('#detailCart').click(function() {
            me.fireEvent('goToCartClicked');
            return false;
        });
    },

    update: function(product) {
        this._product = product;
        this._setContent();
        this._setDetailPicture(this._product.getThumb());
        this._addDetailThumbs(this._product.getPictures());
    },

    _setContent: function(product) {
        $('#detailTitle').text(this._product.getTitle());
        $('#detailDesc').text(this._product.getDescription());
        $('#detailPrice').text(this._product.getPrice() + " €");
    },

    _setDetailPicture: function(picture) {
        $('#detailPicture').prop('src', picture);
    },

    _addDetailThumbs: function(thumbs) {
        var me = this;
        var thumbsOuter = $('#detailThumbs');
        thumbsOuter.empty();
        $.each(thumbs, function (index, thumb) {
            $('<div></div>')
                .css('background-image', 'url(' + thumb + ')')
                .addClass('detail-thumb')
                .click(function () {
                    me._setDetailPicture(thumb);
                })
                .appendTo(thumbsOuter);
        })
    }
});