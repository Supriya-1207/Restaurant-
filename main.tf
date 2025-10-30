locals {
  deployment_manifest = yamldecode(file("${path.module}/k8s/deployment.yaml"))
  service_manifest    = yamldecode(file("${path.module}/k8s/service.yaml"))
}

resource "kubernetes_manifest" "deployment" {
  manifest = merge(local.deployment_manifest, {
    metadata = merge(local.deployment_manifest.metadata, {
      namespace = lookup(local.deployment_manifest.metadata, "namespace", "default")
    })
  })
}

resource "kubernetes_manifest" "service" {
  manifest = merge(local.service_manifest, {
    metadata = merge(local.service_manifest.metadata, {
      namespace = lookup(local.service_manifest.metadata, "namespace", "default")
    })
  })
}

# Optional output to see your service URL easily
output "service_url" {
  value = "http://localhost:${local.service_manifest.spec.ports[0].nodePort}"
}
