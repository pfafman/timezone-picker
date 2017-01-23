

{ checkNpmVersions } = require 'meteor/tmeasday:check-npm-versions'

checkNpmVersions
  'moment-timezone': '^0.5.3'
, 'pfafman:timezone-picker'

moment = require('moment-timezone')

TimezonePicker =

  detectedZone: ->
    tz = jstz.determine()
    tz.name()
  
  mapping: ->
    _.map moment.tz.names(), (name) ->
      prettyName = name.replace("_", " ")
      offset = moment.tz(name)._offset / 60 * -1

      if  offset < 0
        sign = "-"
      else
        sign = ""
      
      min = Math.floor(Math.abs(offset))
      sec = Math.floor((Math.abs(offset) * 60) % 60)
      
      gmtOffset = sign
      if min < 10
        gmtOffset += "0"
      gmtOffset += "#{min}:"
      if sec < 10
        gmtOffset += "0"
      gmtOffset += sec
      
      rtn =
        name: prettyName
        timezone: name
        gmtOffset: gmtOffset
   
  from: (value) ->
    @mapping[value]
  
  to: (value) ->
    for key in @mapping
      if @mapping[key] is value
        key
   