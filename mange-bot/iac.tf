terraform {
  required_providers {
    azurerm = {
        source = "hashicorp/azurerm"
        version = "4.0.1"
    }
  }
}

provider "azurerm" {
  resource_provider_registrations = "none"
  subscription_id = "250ae9c3-6c33-4030-b72a-ed22fce22920"
  features {    
  }
}

resource "azurerm_resource_group" "viniboy-carreta-robot-t-group" {
  name = "viniboy-carreta-robot-tBOY-group"
  location = "eastus2"
}

resource "azurerm_service_plan" "viniboy-carreta-robot-t-sp" {
  name = "viniboy-carreta-robot-tBOY-sp"
  resource_group_name = azurerm_resource_group.viniboy-carreta-robot-t-group.name
  location = azurerm_resource_group.viniboy-carreta-robot-t-group.location
  sku_name = "S1"
  os_type = "Windows"
}

// Ambiente de produção
resource "azurerm_windows_web_app" "viniboy-carreta-robot-t-app" { 
  name = "viniboy-carreta-robot-tBOY-app"
  resource_group_name = azurerm_resource_group.viniboy-carreta-robot-t-group.name
  location = azurerm_resource_group.viniboy-carreta-robot-t-group.location
  service_plan_id = azurerm_service_plan.viniboy-carreta-robot-t-sp.id
  site_config {
    always_on = false
  }
}

resource "azurerm_windows_web_app_slot" "viniboy-carreta-robot-t-app-QA" {
  name = "viniboy-carreta-robot-tBOY-app-QA"
  app_service_id = azurerm_windows_web_app.viniboy-carreta-robot-t-app.id
  site_config {
    
  }
}