var MessageView = Backbone.View.extend({
      template: _.template($('#message-template').html()),
      events: {
          'click #button': 'updateModel'
      },
      updateModel: function (event) {
          this.model.set({
              name: $("#name").val()
          });
          $("#name").html('');
      },
      initialize: function () {
          _.bindAll(this, 'render');
          this.listenTo(this.model, "change", this.render);
      },
      render: function () {
          this.$('#message').html(this.template(this.model.toJSON()));
          return this;
      }
  });

  var NameView = Backbone.View.extend({
      template: _.template($('#name-template').html()),
      initialize: function () {
          _.bindAll(this, 'render');
          this.listenTo(this.model, "change", this.render);
      },
      render: function () {
          this.$el.html(this.template(this.model.toJSON()));
          return this;
      }
  });

  var Person = Backbone.Model.extend({
      defaults: {
          name: ''
      }
  });

  var person = new Person();

  var messageView = new MessageView({
      el: $('#message-container'),
      model: person
  });

  var nameView = new NameView({
      el: $('#name-container'),
      model: person
  });