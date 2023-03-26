const header = {
  homepage: 'https://frangipane.io/',
  title: 'Frangipane Team.',
}

const about = {
  name: 'FrangipaneTeam',
  role: 'Orange Business team',
  description:
    'Frangipane Team is a french team of Orange Business. We are working on lots of projects based on Golang language.',
  social: {
    github: 'https://github.com/FrangipaneTeam',
  },
}

const projects = [
  {
    name: 'terraform-provider-cloudavenue',
    description:
      'A Terraform provider for Cloud Avenue. Cloud Avenue is a IaaS cloud provider based on Vmware technology.',
    stack: ['Golang', 'Terraform'],
    sourceCode: 'https://github.com/orange-cloudavenue/terraform-provider-cloudavenue',
    livePreview: 'https://cloud.orange-business.com/offres/infrastructure-iaas/cloud-avenue/',
  },
  {
    name: 'provider-flexibleengine',
    description:
      'Crossplane provider that exposes XRM-conformant managed resources for the FlexibleEngine API. FlexibleEngine is a IaaS cloud provider based on OpenStack technology.',
    stack: ['Golang', 'CrossPlane'],
    sourceCode: 'https://github.com/FrangipaneTeam/provider-flexibleengine',
    livePreview: 'https://marketplace.upbound.io/providers/frangipaneteam/provider-flexibleengine',
  },
  {
    name: 'bean',
    description:
      'bean is a terminal app built to help to test Crossplane providers.',
    stack: ['Golang', 'Crossplane', 'CLI'],
    sourceCode: 'https://github.com/FrangipaneTeam/bean',
  },
  {
    name: 'terraform-provider-framework-planmodifiers',
    description:
      'Collections of plan modifiers for the Terraform Plugin Framework',
    stack: ['Golang', 'Terraform'],
    sourceCode: 'https://github.com/FrangipaneTeam/terraform-plugin-framework-planmodifiers',
    livePreview: 'https://frangipaneteam.github.io/terraform-plugin-framework-planmodifiers/',
  },
  {
    name: 'terraform-provider-framework-validators',
    description:
      'Collections of validators for the Terraform Plugin Framework',
    stack: ['Golang', 'Terraform'],
    sourceCode: 'https://github.com/FrangipaneTeam/terraform-plugin-framework-validators',
    livePreview: 'https://frangipaneteam.github.io/terraform-plugin-framework-validators/',
  },

]

export { header, about, projects }
