
Template.timezonePicker.onRendered ->
  @$('select').formSelect()


Template.timezonePicker.helpers
  timezones: (usFirst) ->
    usZones = ['US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific']
    
    list = _(TimezonePicker.mapping()).chain().sortBy('name').sortBy (zone) ->
      parseInt(zone.gmtOffset)
    .value()
    
    usList = _(usZones).map (tz) ->
      _(list).find (ele) ->
        ele.name is tz
     
    usList.push
      name: ""
      timezone: ""
      gmtOffset: ""

    usList.concat(list)

  selected: ->
    if Template.parentData(1).selected is @timezone
      'selected'
 