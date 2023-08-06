module default {
  type PSConfig {

    }
  type Resource {
      multi properties: Property;
      required uri: str;
    }
  type Property {
    }
  type Collection {
      multi resources: Resource;
    }
  type `Lock` {}
  type User {}
}
