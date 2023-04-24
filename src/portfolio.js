const header = {
  homepage: 'https://frangipane.io/',
  title: 'Frangipane Team.',
}

const about = {
  name: 'FrangipaneTeam',
  role: 'A team that love Go (and frangipane)',
  description:
    'Frangipane Team is a french team. We are working on lots of projects based on Go language and we love eating frangipane.',
  social: {
    github: 'https://github.com/FrangipaneTeam',
    documentation: 'https://github.frangipane.io/',
  },
}

const contribs = [
  {
    name: 'Terraform CloudAvenue',
    description:
      'A Terraform provider for Cloud Avenue. Cloud Avenue is a IaaS cloud provider based on Vmware technology.',
    stack: ['Go', 'Terraform'],
    sourceCode: 'https://github.com/orange-cloudavenue/terraform-provider-cloudavenue',
    livePreview: 'https://cloud.orange-business.com/offres/infrastructure-iaas/cloud-avenue/',
  },
  {
    name: 'CrossPlane FlexibleEngine',
    description:
      'Crossplane provider that exposes XRM-conformant managed resources for the FlexibleEngine API. FlexibleEngine is a IaaS cloud provider based on OpenStack technology.',
    stack: ['Go', 'CrossPlane'],
    sourceCode: 'https://github.com/FrangipaneTeam/provider-flexibleengine',
    livePreview: 'https://marketplace.upbound.io/providers/frangipaneteam/provider-flexibleengine',
  },
]

const projects = [
  {
    name: 'Terraform SuperSchema',
    description:
      'SuperSchema allows you to write the Terraform schema for resources and datasources in a single definition.',
    stack: ['Go', 'Terraform'],
    sourceCode: 'https://github.com/FrangipaneTeam/terraform-plugin-framework-superschema',
    livePreview: 'https://github.frangipane.io/terraform/superschema/why/',
  },
  {
    name: 'Bean',
    description:
      'Bean is a terminal app built to help to test Crossplane providers.',
    stack: ['Go', 'Crossplane', 'CLI'],
    sourceCode: 'https://github.com/FrangipaneTeam/bean',
  },
  {
    name: 'Terraform PlanModifiers',
    description:
      'Collections of plan modifiers for the Terraform Plugin Framework',
    stack: ['Go', 'Terraform'],
    sourceCode: 'https://github.com/FrangipaneTeam/terraform-plugin-framework-planmodifiers',
    livePreview: 'https://github.frangipane.io/terraform/planmodifiers/getting-started/',
  },
  {
    name: 'Terraform Validators',
    description:
      'Collections of validators for the Terraform Plugin Framework',
    stack: ['Go', 'Terraform'],
    sourceCode: 'https://github.com/FrangipaneTeam/terraform-plugin-framework-validators',
    livePreview: 'https://github.frangipane.io/terraform/validators/getting-started/',
  },
  {
    name: '🚀 More projects',
    description:
      'Discover more projects on our GitHub repositories and our documentation website.',
    stack: [],
    sourceCode: 'https://github.com/FrangipaneTeam',
    livePreview: 'https://github.frangipane.io/',
  },
]

export { header, about, projects, contribs }
