// Load config
var config = require('./config.json');
const config_path = process.env.CONFIG_PATH ? process.env.CONFIG_PATH : './sample_config.json'
config = {}

// Store version info
var versions = {}

function check_sources() {
  for (source in config.sources) {

  }
  return
}

function send_notification() {
  if (config.notifications.enabled) {

  }
  return
}

function publish_metrics() {
  if (config.metrics.enabled) {

  }
  return
}