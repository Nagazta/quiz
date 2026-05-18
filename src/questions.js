export const questions = [
  // SECTION A - DHCP
  {
    id: 1,
    category: "Old",
    section: "DHCP",
    type: "mcq",
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Control Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Configuration Process",
      "Domain Host Configuration Protocol"
    ],
    answer: 1
  },
  {
    id: 2,
    section: "DHCP",
    type: "mcq",
    question: "DHCP is described as what type of protocol?",
    options: [
      "A file transfer protocol used on local networks",
      "A network management protocol used on Internet Protocol (IP) networks",
      "A security protocol used to encrypt network traffic",
      "A routing protocol used between network segments"
    ],
    answer: 1
  },
  {
    id: 3,
    section: "DHCP",
    type: "mcq",
    question: "What architecture does DHCP operate on?",
    options: [
      "Peer-to-peer architecture",
      "Mesh architecture",
      "Client-server architecture",
      "Star architecture"
    ],
    answer: 2
  },
  {
    id: 4,
    section: "DHCP",
    type: "mcq",
    question: "What does DHCP automatically assign to devices connected to the network?",
    options: [
      "MAC addresses and subnet masks only",
      "IP addresses and other communication parameters",
      "Domain names and hostnames",
      "Encryption keys and certificates"
    ],
    answer: 1
  },
  {
    id: 5,
    section: "DHCP",
    type: "mcq",
    question: "On which layer of the TCP/IP Protocol does DHCP work?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer"
    ],
    answer: 2
  },
  {
    id: 6,
    section: "DHCP",
    type: "mcq",
    question: "When was DHCP first defined?",
    options: [
      "October 1989",
      "October 1991",
      "October 1993",
      "October 1997"
    ],
    answer: 2
  },
  {
    id: 7,
    section: "DHCP",
    type: "mcq",
    question: "DHCP is based on which earlier protocol?",
    options: [
      "FTP (File Transfer Protocol)",
      "SNMP (Simple Network Management Protocol)",
      "BOOTP (Bootstrap Protocol)",
      "ARP (Address Resolution Protocol)"
    ],
    answer: 2
  },
  {
    id: 8,
    section: "DHCP",
    type: "mcq",
    question: "What can DHCP do that BOOTP could not?",
    options: [
      "Resolve domain names to IP addresses",
      "Encrypt network communications",
      "Dynamically allocate IP addresses from a pool and reclaim them when no longer in use",
      "Assign MAC addresses to devices"
    ],
    answer: 2
  },
  {
    id: 9,
    section: "DHCP",
    type: "mcq",
    question: "What are the TWO main components of DHCP?",
    options: [
      "DNS Server and Proxy Server",
      "DHCP Server and DHCP Client",
      "Router and Switch",
      "Primary DNS and Secondary DNS"
    ],
    answer: 1
  },
  {
    id: 10,
    section: "DHCP",
    type: "mcq",
    question: "Where is the DHCP Server installed on the network?",
    options: [
      "On every client device",
      "On each workstation separately",
      "Centrally on the network",
      "On the internet router only"
    ],
    answer: 2
  },
  {
    id: 11,
    section: "DHCP",
    type: "mcq",
    question: "What does a DHCP Client run on each device?",
    options: [
      "A full server instance of the DHCP protocol",
      "A client instance of the DHCP protocol stack",
      "A copy of the IP address pool",
      "A backup of the DHCP server configuration"
    ],
    answer: 1
  },
  {
    id: 12,
    section: "DHCP",
    type: "mcq",
    question: "DHCP services exist for which versions of the Internet Protocol?",
    options: [
      "IPv4 only",
      "IPv6 only",
      "Both IPv4 and version 6 (IPv6)",
      "Neither; DHCP uses its own protocol"
    ],
    answer: 2
  },
  {
    id: 13,
    section: "DHCP",
    type: "mcq",
    question: "What is the IPv6 version of DHCP commonly called?",
    options: [
      "DHCPv6",
      "IPv6-DHCP",
      "DHCPng",
      "SLAAC"
    ],
    answer: 0
  },
  {
    id: 14,
    section: "DHCP",
    type: "mcq",
    question: "Which of the following is listed as a PRO/advantage of DHCP?",
    options: [
      "IP conflict can occur",
      "The client is not able to access the network in the absence of a DHCP server",
      "Centralized management of IP addresses",
      "The name of the machine will not be changed when a new IP is assigned"
    ],
    answer: 2
  },
  {
    id: 15,
    section: "DHCP",
    type: "mcq",
    question: "Which of the following is another PRO of DHCP?",
    options: [
      "Clients accept any server creating a security risk",
      "Ease of adding new clients to a network",
      "IP conflict can occur",
      "The client cannot access the network without a DHCP server"
    ],
    answer: 1
  },
  {
    id: 16,
    section: "DHCP",
    type: "mcq",
    question: "Which type of devices benefit most from DHCP's efficient IP address change handling?",
    options: [
      "Desktop servers with fixed locations",
      "Portable devices that move to different locations on a wireless network",
      "Routers and switches",
      "Mainframe computers"
    ],
    answer: 1
  },
  {
    id: 17,
    section: "DHCP",
    type: "mcq",
    question: "Which of the following is listed as a CON/disadvantage of DHCP?",
    options: [
      "Ease of adding new clients to a network",
      "Centralized management of IP addresses",
      "IP conflict can occur",
      "Reuse of IP addresses"
    ],
    answer: 2
  },
  {
    id: 18,
    section: "DHCP",
    type: "mcq",
    question: "What is the problem with DHCP clients accepting any server?",
    options: [
      "The server may assign an IP that is too short",
      "The client may connect to a rogue server that sends invalid data",
      "The network slows down significantly",
      "DNS resolution fails"
    ],
    answer: 1
  },
  {
    id: 19,
    section: "DHCP",
    type: "mcq",
    question: "What happens to the client if the DHCP server is absent?",
    options: [
      "The client generates its own IP address",
      "The client uses a cached IP from its last session",
      "The client is not able to access the network",
      "The client switches to manual configuration automatically"
    ],
    answer: 2
  },
  {
    id: 20,
    section: "DHCP",
    type: "mcq",
    question: "What does NOT change when a new IP address is assigned by DHCP?",
    options: [
      "The IP address",
      "The subnet mask",
      "The name of the machine",
      "The lease duration"
    ],
    answer: 2
  },
  // SECTION B - DNS
  {
    id: 21,
    section: "DNS",
    type: "mcq",
    question: "How does the slide describe the role of a DNS server?",
    options: [
      "As the internet's security guard",
      "As the internet's phonebook",
      "As the internet's mail server",
      "As the internet's firewall"
    ],
    answer: 1
  },
  {
    id: 22,
    section: "DNS",
    type: "mcq",
    question: "When users type domain names like 'google.com' into their browsers, what is DNS responsible for?",
    options: [
      "Encrypting the connection to the website",
      "Assigning a new IP address to the user",
      "Finding the correct IP address associated with those sites",
      "Blocking unauthorized access to the website"
    ],
    answer: 2
  },
  {
    id: 23,
    section: "DNS",
    type: "mcq",
    question: "After DNS resolves a domain name, what do browsers use the returned IP address for?",
    options: [
      "To send emails to the domain owner",
      "To communicate with origin servers or CDN edge servers to access website information",
      "To register the domain name",
      "To check the SSL certificate of the site"
    ],
    answer: 1
  },
  {
    id: 24,
    section: "DNS",
    type: "mcq",
    question: "In a typical DNS query WITHOUT any caching, how many types of servers work together?",
    options: ["2", "3", "4", "5"],
    answer: 2
  },
  {
    id: 25,
    section: "DNS",
    type: "mcq",
    question: "Which DNS server type receives queries from DNS clients?",
    options: [
      "Root Nameservers",
      "TLD Nameservers",
      "Authoritative Nameservers",
      "Recursive Resolvers"
    ],
    answer: 3
  },
  {
    id: 26,
    section: "DNS",
    type: "mcq",
    question: "Where are Recursive Resolvers built into, according to the slides?",
    options: [
      "Dedicated server hardware only",
      "Most modern operating systems",
      "Network routers exclusively",
      "The ISP backbone"
    ],
    answer: 1
  },
  {
    id: 27,
    section: "DNS",
    type: "mcq",
    question: "What do Recursive Resolvers do after receiving a query?",
    options: [
      "They immediately return the IP address to the client",
      "They interact with other DNS servers to find the correct IP address",
      "They block the request if the domain is not registered",
      "They forward the request to the client's ISP"
    ],
    answer: 1
  },
  {
    id: 28,
    section: "DNS",
    type: "mcq",
    question: "What is the first step in translating human-readable domain names into IP addresses?",
    options: [
      "Contacting the TLD Nameserver directly",
      "Contacting the Authoritative Nameserver",
      "Root Nameservers responding to resolvers",
      "The Recursive Resolver returning the IP directly"
    ],
    answer: 2
  },
  {
    id: 29,
    section: "DNS",
    type: "mcq",
    question: "What do Root Nameservers respond with during a DNS query?",
    options: [
      "The final IP address of the origin server",
      "The address of a top-level domain (TLD) DNS server",
      "The MAC address of the destination server",
      "The SSL certificate for the domain"
    ],
    answer: 1
  },
  {
    id: 30,
    section: "DNS",
    type: "mcq",
    question: "What do TLD Nameservers provide during a DNS query?",
    options: [
      "The final content of the requested website",
      "The IP address of the domain's authoritative nameserver",
      "The MAC address of the requesting client",
      "The cached DNS record from previous queries"
    ],
    answer: 1
  },
  {
    id: 31,
    section: "DNS",
    type: "mcq",
    question: "What do Authoritative Nameservers respond with?",
    options: [
      "The address of the TLD server",
      "A cached version of the DNS record",
      "The IP address of the origin server",
      "The DNS query log"
    ],
    answer: 2
  },
  {
    id: 32,
    section: "DNS",
    type: "mcq",
    question: "What does the Recursive Resolver do after receiving the IP address from the Authoritative Nameserver?",
    options: [
      "Stores it permanently in the Root Nameserver",
      "Passes the origin server IP address back to the client",
      "Sends it to the TLD Nameserver for verification",
      "Discards it and requests a new query"
    ],
    answer: 1
  },
  {
    id: 33,
    section: "DNS",
    type: "mcq",
    question: "What does the DNS system delegate to authoritative name servers for each domain?",
    options: [
      "IP address pool management",
      "The responsibility of assigning domain names and mapping them to Internet resources",
      "Network traffic routing",
      "SSL certificate issuance"
    ],
    answer: 1
  },
  {
    id: 34,
    section: "DNS",
    type: "mcq",
    question: "What can network administrators do with subdomains of their allocated name space?",
    options: [
      "They must keep all subdomains on the same server",
      "Only the root authority can manage subdomains",
      "They may delegate authority over subdomains to other name servers",
      "Subdomains require ISP approval before creation"
    ],
    answer: 2
  },
  {
    id: 35,
    section: "DNS",
    type: "mcq",
    question: "According to the slides, what type of service does the DNS delegation mechanism provide?",
    options: [
      "Centralized and single-point service",
      "Distributed and fault-tolerant service",
      "Encrypted and secure service",
      "Redundant and load-balanced service"
    ],
    answer: 1
  },
  {
    id: 36,
    section: "DNS",
    type: "mcq",
    question: "What was the DNS system designed to avoid?",
    options: [
      "Multiple name servers managing subdomains",
      "Encrypted DNS traffic",
      "A single large central database",
      "Distributed fault-tolerant service"
    ],
    answer: 2
  },
  {
    id: 37,
    section: "DNS",
    type: "mcq",
    question: "What does the DNS protocol define as part of the Internet protocol suite?",
    options: [
      "The physical layer of network transmission",
      "The routing algorithm for IP packets",
      "The data structures and data communication exchanges used in DNS",
      "The encryption standards for HTTPS"
    ],
    answer: 2
  },
  {
    id: 38,
    section: "DNS",
    type: "mcq",
    question: "In the DNS structure diagram, what does a dashed circle represent?",
    options: [
      "A resource record associated with a name",
      "A zone of authority managed by a name server",
      "A deleted domain entry",
      "A TLD nameserver node"
    ],
    answer: 1
  },
  {
    id: 39,
    section: "DNS",
    type: "mcq",
    question: "In the DNS structure diagram, what does an NS RR (resource record) do?",
    options: [
      "Stores the final IP address of a domain",
      "Names the nameserver authoritative for a delegated subzone",
      "Encrypts the DNS zone data",
      "Routes traffic between TLD servers"
    ],
    answer: 1
  },
  {
    id: 40,
    section: "DNS",
    type: "mcq",
    question: "In the DNS structure slide, what happens during 'zone delegation'?",
    options: [
      "A zone is deleted from the root nameserver",
      "A system administrator lets another administrator manage part of a zone by delegating it to another nameserver",
      "A zone is encrypted and moved to the TLD server",
      "A zone is temporarily disabled for maintenance"
    ],
    answer: 1
  },
  // SECTION C - True/False DHCP
  {
    id: 41,
    section: "DHCP",
    type: "tf",
    question: "DHCP operates using a client-server architecture.",
    answer: true
  },
  {
    id: 42,
    section: "DHCP",
    type: "tf",
    question: "DHCP was first defined in October 1993.",
    answer: true
  },
  {
    id: 43,
    section: "DHCP",
    type: "tf",
    question: "DHCP can only assign IP addresses and cannot assign any other communication parameters.",
    answer: false
  },
  {
    id: 44,
    section: "DHCP",
    type: "tf",
    question: "The IPv6 version of DHCP is commonly called DHCPv6.",
    answer: true
  },
  {
    id: 45,
    section: "DHCP",
    type: "tf",
    question: "One disadvantage of DHCP is that the name of the machine changes when a new IP address is assigned.",
    answer: false
  },
  // SECTION C - True/False DNS
  {
    id: 46,
    section: "DNS",
    type: "tf",
    question: "DNS acts as the internet's phonebook by finding the correct IP address associated with domain names.",
    answer: true
  },
  {
    id: 47,
    section: "DNS",
    type: "tf",
    question: "Root Nameservers provide the final IP address of the origin server directly to the browser.",
    answer: false
  },
  {
    id: 48,
    section: "DNS",
    type: "tf",
    question: "Authoritative Nameservers are the last to respond in a DNS query and provide the IP address of the origin server.",
    answer: true
  },
  {
    id: 49,
    section: "DNS",
    type: "tf",
    question: "The DNS system was designed to use a single large central database for reliability.",
    answer: false
  },
  {
    id: 50,
    section: "DNS",
    type: "tf",
    question: "Network administrators may delegate authority over subdomains to other name servers.",
    answer: true
  },
  // SECTION E - File & Folder Sharing
  {
    id: 56,
    section: "File & Share Permissions",
    type: "mcq",
    question: "How does the slide define local sharing?",
    options: [
      "Sharing files over the internet using cloud services",
      "Sharing files and folders on the same local network without the need of the internet",
      "Sharing files between two different domain networks",
      "Sharing files via encrypted VPN tunnels"
    ],
    answer: 1
  },
  {
    id: 57,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What is the example of local sharing given in the slides?",
    options: [
      "Domain-based sharing",
      "FTP file transfer",
      "Public folder sharing",
      "Cloud storage sharing"
    ],
    answer: 2
  },
  {
    id: 58,
    section: "File & Share Permissions",
    type: "mcq",
    question: "How does the slide define network sharing?",
    options: [
      "Sharing files only between two computers using a cable",
      "Sharing files and folders across multiple computers within a network, very common in business environments where collaboration is needed",
      "Sharing files using Bluetooth technology",
      "Sharing files using a physical USB drive"
    ],
    answer: 1
  },
  {
    id: 59,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What is the example of network sharing given in the slides?",
    options: [
      "Public folder sharing",
      "Bluetooth file transfer",
      "USB drive sharing",
      "Domain-based sharing"
    ],
    answer: 3
  },
  {
    id: 60,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, how many types of permissions exist in Windows?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    id: 61,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What are the two types of permissions in Windows?",
    options: [
      "FAT and NTFS permissions",
      "Local permissions and Remote permissions",
      "NTFS permissions and Share permissions",
      "Read-only and Full Control permissions"
    ],
    answer: 2
  },
  // SECTION F - NTFS
  {
    id: 62,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, NTFS permissions are what type of control?",
    options: [
      "Network level control permission",
      "Application level control permission",
      "File system level control",
      "Domain level control permission"
    ],
    answer: 2
  },
  {
    id: 63,
    section: "File & Share Permissions",
    type: "mcq",
    question: "NTFS permissions apply to files and folders stored in disk volumes formatted with which system?",
    options: ["FAT32", "exFAT", "NTFS", "ext4"],
    answer: 2
  },
  {
    id: 64,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, NTFS permissions apply to which users?",
    options: [
      "Only network users",
      "Only local users",
      "Only domain administrators",
      "Both local and network users"
    ],
    answer: 3
  },
  {
    id: 65,
    section: "File & Share Permissions",
    type: "mcq",
    question: "How can NTFS-protected folders be made accessible to other computers on a network?",
    options: [
      "By removing all permissions",
      "By converting to FAT32",
      "By setting specific permissions for users and groups allowing controlled access to shared files and folders",
      "By disabling the firewall"
    ],
    answer: 2
  },
  // SECTION G - Share Permissions
  {
    id: 66,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, Share permissions are what type of control?",
    options: [
      "File system level control",
      "Application level control",
      "Network level control permission",
      "Hardware level control"
    ],
    answer: 2
  },
  {
    id: 67,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, Share permissions apply to which users?",
    options: [
      "Local users only",
      "Both local and network users",
      "Domain administrators only",
      "Network users only"
    ],
    answer: 3
  },
  {
    id: 68,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What are the three levels of Share permissions shown in the slides?",
    options: [
      "Read, Write, Execute",
      "Full Control, Modify, Read",
      "Owner, Group, Others",
      "Full Control, Change, Read"
    ],
    answer: 3
  },
  // SECTION H - NTFS vs Share
  {
    id: 69,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, NTFS permissions apply to which users in the comparison table?",
    options: [
      "Network Users only",
      "Local users only",
      "Local and network users (on the file system)",
      "Domain administrators only"
    ],
    answer: 2
  },
  {
    id: 70,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, Share permissions apply to which users in the comparison table?",
    options: [
      "Local and network users",
      "Local users only",
      "Network Users (accessing via shared folder)",
      "Domain administrators only"
    ],
    answer: 2
  },
  {
    id: 71,
    section: "File & Share Permissions",
    type: "mcq",
    question: "Which permission type has 'Very detailed' granular control?",
    options: [
      "Share permissions",
      "Both are equally detailed",
      "NTFS permissions",
      "Neither; both have the same granularity"
    ],
    answer: 2
  },
  {
    id: 72,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What are the granular control options for Share permissions?",
    options: [
      "Full Control, Modify, Read & Execute, List Folder Contents",
      "Read, Write, Execute",
      "Full Control, Change, Read",
      "Owner, Group, Others"
    ],
    answer: 2
  },
  {
    id: 73,
    section: "File & Share Permissions",
    type: "mcq",
    question: "Can NTFS and Share permissions be used at the same time?",
    options: [
      "No, only one can be active at a time",
      "No, they are mutually exclusive",
      "Yes",
      "Yes, but Windows automatically disables one"
    ],
    answer: 2
  },
  {
    id: 74,
    section: "File & Share Permissions",
    type: "mcq",
    question: "When NTFS and Share permissions are combined, what rule applies?",
    options: [
      "The most permissive rule applies",
      "NTFS always overrides Share permissions",
      "Share permissions always override NTFS",
      "The most restrictive rule applies"
    ],
    answer: 3
  },
  // SECTION I - Explicit & Inherited
  {
    id: 75,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, what are Explicit permissions?",
    options: [
      "Permissions automatically passed down from a parent folder",
      "Permissions set by the domain controller by default",
      "Access rights directly assigned to a specific file or folder",
      "Permissions inherited from the operating system installation"
    ],
    answer: 2
  },
  {
    id: 76,
    section: "File & Share Permissions",
    type: "mcq",
    question: "Can Explicit permissions be customized for individual objects?",
    options: [
      "No, they apply uniformly to all files",
      "Yes, they can be customized for individual objects",
      "Only administrators can customize them",
      "Only for shared network folders"
    ],
    answer: 1
  },
  {
    id: 77,
    section: "File & Share Permissions",
    type: "mcq",
    question: "Explicit permissions always take priority over what?",
    options: [
      "Share permissions",
      "Domain permissions",
      "Inherited permissions",
      "Default OS permissions"
    ],
    answer: 2
  },
  {
    id: 78,
    section: "File & Share Permissions",
    type: "mcq",
    question: "When should you use Explicit permissions?",
    options: [
      "When you want all files to inherit parent folder settings",
      "When a specific file or folder needs different access levels than its parent folder, or to grant unique access rights to a user on a particular object",
      "When setting up default permissions for a new domain",
      "When disabling all permissions on a folder"
    ],
    answer: 1
  },
  {
    id: 79,
    section: "File & Share Permissions",
    type: "mcq",
    question: "According to the slides, what are Inherited permissions?",
    options: [
      "Permissions directly assigned to a specific file",
      "Permissions set by administrators for each individual file",
      "Access rights automatically passed down from a parent folder to its child objects",
      "Permissions that deny all access by default"
    ],
    answer: 2
  },
  {
    id: 80,
    section: "File & Share Permissions",
    type: "mcq",
    question: "By default, what do child objects inherit?",
    options: [
      "Full Control permissions from the domain controller",
      "No permissions at all",
      "The permission set on the parent folder",
      "Read-only permissions from the OS"
    ],
    answer: 2
  },
  {
    id: 81,
    section: "File & Share Permissions",
    type: "mcq",
    question: "How can you disable inheritance on a folder?",
    options: [
      "By deleting the parent folder",
      "By using the 'Disable inheritance' button",
      "By setting permissions to Full Control for Everyone",
      "By removing all users from the permissions list"
    ],
    answer: 1
  },
  // SECTION J - Sharing Methods
  {
    id: 82,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What does the Mapped (Persistent Access) sharing method do?",
    options: [
      "Connects to a folder temporarily each time it is needed",
      "Maps a shared folder to a drive letter on a user's computer for easier access",
      "Uses a UNC path directly from the Run dialog",
      "Requires an internet connection at all times"
    ],
    answer: 1
  },
  {
    id: 83,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What is Network (Direct Access) sharing?",
    options: [
      "Mapping a folder to a drive letter permanently",
      "Sharing files using cloud storage",
      "When a specific folder is shared over the network and users access it via a network path / UNC paths",
      "Sharing files using Bluetooth"
    ],
    answer: 2
  },
  {
    id: 84,
    section: "File & Share Permissions",
    type: "mcq",
    question: "What does the Run dialog box in the Network Direct Access slide display as the example UNC path?",
    options: [
      "\\\\server\\publicfolder",
      "\\\\computerone\\sharedfolder",
      "\\\\domain\\sharedfiles",
      "\\\\network\\access"
    ],
    answer: 1
  },
  // SECTION K - True/False File & Permissions
  {
    id: 85,
    section: "File & Share Permissions",
    type: "tf",
    question: "Local sharing requires the use of the internet.",
    answer: false
  },
  {
    id: 86,
    section: "File & Share Permissions",
    type: "tf",
    question: "Network sharing is very common in business environments where collaboration is needed.",
    answer: true
  },
  {
    id: 87,
    section: "File & Share Permissions",
    type: "tf",
    question: "There are two types of permissions in Windows: NTFS permissions and Share permissions.",
    answer: true
  },
  {
    id: 88,
    section: "File & Share Permissions",
    type: "tf",
    question: "Share permissions apply to both local and network users.",
    answer: false
  },
  {
    id: 89,
    section: "File & Share Permissions",
    type: "tf",
    question: "NTFS permissions apply to both local and network users.",
    answer: true
  },
  {
    id: 90,
    section: "File & Share Permissions",
    type: "tf",
    question: "NTFS permissions offer more granular control than Share permissions.",
    answer: true
  },
  {
    id: 91,
    section: "File & Share Permissions",
    type: "tf",
    question: "When NTFS and Share permissions are combined, the most permissive rule applies.",
    answer: false
  },
  {
    id: 92,
    section: "File & Share Permissions",
    type: "tf",
    question: "Explicit permissions always take priority over inherited permissions.",
    answer: true
  },
  {
    id: 93,
    section: "File & Share Permissions",
    type: "tf",
    question: "Inherited permissions are automatically passed down from a parent folder to its child objects.",
    answer: true
  },
  {
    id: 94,
    section: "File & Share Permissions",
    type: "tf",
    question: "You cannot disable inheritance on a folder in Windows.",
    answer: false
  },
  // BONUS - Mixed Review
  {
    id: 100,
    section: "Mixed Review",
    type: "mcq",
    question: "Which of the following best describes DHCP's role in a large network?",
    options: [
      "Encrypts all network communication",
      "Routes packets between networks",
      "Allows the administrator to configure the entire network from a centralized area",
      "Monitors network traffic for intrusions"
    ],
    answer: 2
  },
  {
    id: 101,
    section: "Mixed Review",
    type: "mcq",
    question: "Which DHCP component is found on every device that connects to the network?",
    options: [
      "DHCP Server",
      "DNS Server",
      "DHCP Client",
      "Proxy Server"
    ],
    answer: 2
  },
  {
    id: 102,
    section: "Mixed Review",
    type: "mcq",
    question: "The DHCP protocol reclaims IP addresses when they are no longer in use. This is an improvement over which predecessor protocol?",
    options: ["FTP", "ARP", "SNMP", "BOOTP"],
    answer: 3
  },
  {
    id: 103,
    section: "Mixed Review",
    type: "mcq",
    question: "Reuse of IP addresses through DHCP achieves what benefit?",
    options: [
      "Increases the number of IP addresses required",
      "Reduces the total number of IP addresses that are required",
      "Permanently assigns IPs to devices",
      "Forces manual configuration of each client"
    ],
    answer: 1
  },
  {
    id: 104,
    section: "Mixed Review",
    type: "mcq",
    question: "Which of the following is TRUE about DHCP and IPv6?",
    options: [
      "DHCP only works with IPv4 and has no IPv6 equivalent",
      "DHCP services exist for both IPv4 and IPv6 networks",
      "DHCPv6 is completely different from DHCP and unrelated",
      "IPv6 devices do not need DHCP"
    ],
    answer: 1
  },
  {
    id: 105,
    section: "Mixed Review",
    type: "mcq",
    question: "Which DNS server type is described as the 'first step' in translating domain names to IP addresses?",
    options: [
      "Recursive Resolver",
      "TLD Nameserver",
      "Authoritative Nameserver",
      "Root Nameserver"
    ],
    answer: 3
  },
  {
    id: 106,
    section: "Mixed Review",
    type: "mcq",
    question: "What allows a client to initiate a direct query to the origin server for website data?",
    options: [
      "The TLD Nameserver providing the IP",
      "The Root Nameserver caching the result",
      "The Recursive Resolver passing the IP address back to the client",
      "The Authoritative Nameserver contacting the browser"
    ],
    answer: 2
  },
  {
    id: 107,
    section: "Mixed Review",
    type: "mcq",
    question: "In DNS, what does TLD stand for?",
    options: [
      "Transfer Level Domain",
      "Top-Level Domain",
      "Trusted Link Directory",
      "Terminal Level Data"
    ],
    answer: 1
  },
  {
    id: 108,
    section: "Mixed Review",
    type: "mcq",
    question: "What does the dashed circle in the DNS diagram represent?",
    options: [
      "A resource record",
      "A root nameserver",
      "A zone of authority managed by a name server",
      "A TLD server node"
    ],
    answer: 2
  },
  {
    id: 109,
    section: "Mixed Review",
    type: "mcq",
    question: "What is the purpose of zone delegation in DNS?",
    options: [
      "To delete unused zones from the root",
      "To encrypt zone data before transfer",
      "To allow another administrator to manage part of a zone through another nameserver",
      "To temporarily disable a zone for maintenance"
    ],
    answer: 2
  },
  {
    id: 110,
    section: "Mixed Review",
    type: "mcq",
    question: "Which type of sharing uses a drive letter assigned to a shared folder?",
    options: [
      "Network (Direct Access)",
      "Public folder sharing",
      "Domain-based sharing",
      "Mapped (Persistent Access)"
    ],
    answer: 3
  },
  {
    id: 111,
    section: "Mixed Review",
    type: "mcq",
    question: "Which sharing type is accessed via UNC paths?",
    options: [
      "Mapped (Persistent Access)",
      "Local sharing",
      "Public folder sharing",
      "Network (Direct Access)"
    ],
    answer: 3
  },
  {
    id: 112,
    section: "Mixed Review",
    type: "mcq",
    question: "A user is accessing a shared folder over the network. Share permission is 'Change' and the NTFS permission is 'Read.' What is the effective permission?",
    options: ["Change", "Full Control", "Read", "No access"],
    answer: 2
  },
  {
    id: 113,
    section: "Mixed Review",
    type: "mcq",
    question: "Which permission type is directly assigned to a specific file or folder?",
    options: [
      "Inherited permissions",
      "Default permissions",
      "Share permissions",
      "Explicit permissions"
    ],
    answer: 3
  },
  {
    id: 114,
    section: "Mixed Review",
    type: "mcq",
    question: "Which permission type is automatically passed down from a parent folder?",
    options: [
      "Explicit permissions",
      "Share permissions",
      "NTFS permissions",
      "Inherited permissions"
    ],
    answer: 3
  },
  {
    id: 115,
    section: "Mixed Review",
    type: "mcq",
    question: "Which of the following is NOT a level of Share permissions?",
    options: ["Full Control", "Change", "Read", "Modify"],
    answer: 3
  },
  {
    id: 116,
    section: "Mixed Review",
    type: "mcq",
    question: "NTFS permissions include which detailed option NOT found in Share permissions?",
    options: [
      "Full Control",
      "Change",
      "Read",
      "Modify and Read & Execute"
    ],
    answer: 3
  },
  {
    id: 117,
    section: "Mixed Review",
    type: "mcq",
    question: "What does the 'Disable inheritance' button do?",
    options: [
      "Grants Full Control to all child objects",
      "Deletes all permissions from the folder",
      "Stops permissions from being automatically passed down from the parent folder",
      "Converts Share permissions to NTFS permissions"
    ],
    answer: 2
  },
  {
    id: 118,
    section: "Mixed Review",
    type: "mcq",
    question: "Which correctly states the key difference between Explicit and Inherited permissions?",
    options: [
      "Inherited permissions always override Explicit permissions",
      "Both types have equal priority",
      "Explicit permissions always take priority over Inherited permissions",
      "Inherited permissions can only be set by administrators"
    ],
    answer: 2
  },
  {
    id: 119,
    section: "Mixed Review",
    type: "mcq",
    question: "NTFS permissions apply to files and folders stored on disks formatted with which file system?",
    options: ["FAT32", "exFAT", "ext4", "NTFS"],
    answer: 3
  },
  {
    id: 120,
    section: "Mixed Review",
    type: "mcq",
    question: "According to the slides, Share permissions are a type of what level control?",
    options: [
      "File system level",
      "Application level",
      "Hardware level",
      "Network level"
    ],
    answer: 3
  },
  // SECTION L - Advanced Permissions & ABE (SAM Topic 08)
  {
    id: 121,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "What term describes the final set of permissions a user actually has after combining all sources including group memberships, explicit assignments, and inherited permissions?",
    options: ["Cumulative permissions", "Effective permissions", "Applied permissions", "Resolved permissions"],
    answer: 1
  },
  {
    id: 122,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which type of permission is assigned directly to a user or group on a specific file or folder without coming from a parent?",
    options: ["Inherited permission", "Group permission", "Explicit permission", "Default permission"],
    answer: 2
  },
  {
    id: 123,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "In NTFS, when a parent folder has Read + Write permissions and inheritance is enabled, what permissions will a subfolder have by default?",
    options: ["Read only", "No permissions until manually set", "Read + Write, inherited from the parent", "Write only"],
    answer: 2
  },
  {
    id: 124,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A Deny permission is applied to a user on a specific folder. The user is also a member of a group that has Allow Read on that folder. What is the effective access?",
    options: ["Allow — group membership overrides Deny", "Deny — Deny overrides any Allow", "Allow — the most permissive applies", "No access until an admin resets permissions"],
    answer: 1
  },
  {
    id: 125,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "All employees inherit access to the 'Project Files' folder. The admin needs to block only John from accessing the 'Confidential' subfolder without affecting other employees. What is the correct approach?",
    options: ["Remove John from the Employees group", "Set an Explicit Deny for John on the Confidential folder", "Delete the Confidential folder and recreate it", "Remove the shared permission from Project Files"],
    answer: 1
  },
  {
    id: 126,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "What is 'Break Inheritance' used for in NTFS permissions?",
    options: ["It removes all permissions from a folder permanently", "It detaches the folder from parent permission rules so fresh permissions can be set manually", "It prevents users from viewing the folder", "It grants Full Control to local Administrators automatically"],
    answer: 1
  },
  {
    id: 127,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which of the following best describes an inherited permission?",
    options: ["A permission manually assigned to every individual file", "A permission automatically passed down from a parent folder to child folders and files", "A temporary permission that expires after logout", "A permission that only applies over the network"],
    answer: 1
  },
  {
    id: 128,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Access-Based Enumeration (ABE) primarily affects which aspect of shared folder access?",
    options: ["The NTFS permissions applied to files", "The visibility of files and folders to users without access", "The speed of file transfer over the network", "The encryption applied to shared folders"],
    answer: 1
  },
  {
    id: 129,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Without ABE enabled, what can a user see when browsing a shared network drive?",
    options: ["Only folders they have at least Read permission on", "All folders including those they cannot open", "Only files, not folders", "Only folders shared with the Everyone group"],
    answer: 1
  },
  {
    id: 130,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which file systems are compatible with Access-Based Enumeration?",
    options: ["FAT32 and exFAT", "NTFS only", "Any file system supported by Windows Server", "FAT32, NTFS, and exFAT equally"],
    answer: 1
  },
  {
    id: 131,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "What does ABE actually change when it hides a folder from a user?",
    options: ["It changes the NTFS permissions on the folder", "It deletes the folder from the server temporarily", "Only the visibility — the actual permissions remain unchanged", "It moves the folder to a hidden system directory"],
    answer: 2
  },
  {
    id: 132,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A user complains they keep getting 'Access Denied' when trying to open folders on a file share, but they can still see all folder names. Which setting would most directly improve this experience?",
    options: ["Increase NTFS permissions for the user", "Enable Access-Based Enumeration on the share", "Disable inheritance on all folders", "Grant the user Full Control share permission"],
    answer: 1
  },
  {
    id: 133,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "ABE relies on which combination of permissions to function correctly?",
    options: ["Share permissions only", "NTFS permissions only", "Both NTFS permissions AND share permissions", "Group Policy permissions"],
    answer: 2
  },
  {
    id: 134,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Why is it important to understand that ABE is NOT a security silver bullet?",
    options: ["Because ABE only works on Windows 10, not Server", "Because misconfigured NTFS permissions can still expose data even if ABE hides the folder", "Because ABE increases network traffic significantly", "Because ABE can be bypassed using a UNC path"],
    answer: 1
  },
  {
    id: 135,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A user belongs to a group with Allow Modify on a folder. An admin then sets an Explicit Deny Read on that same user directly. What is the user's effective permission?",
    options: ["Modify — because group permissions take priority", "Deny — explicit Deny overrides all Allow sources", "Read only — the permissions are averaged", "The user retains Modify because it was set first"],
    answer: 1
  },
  {
    id: 136,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which of the following is a security benefit of enabling ABE on a file server?",
    options: ["It encrypts all files automatically", "Users cannot attempt to access folders they cannot even see, reducing unauthorized access attempts", "It forces two-factor authentication for shared folders", "It converts share permissions to NTFS permissions automatically"],
    answer: 1
  },
  {
    id: 137,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "When is it appropriate to use 'Break Inheritance' instead of applying an Explicit Deny?",
    options: ["When you want to block only one specific user", "When you want to completely detach a folder from all parent permissions and configure it independently", "When inheritance is already disabled", "When the folder has no permissions set"],
    answer: 1
  },
  {
    id: 138,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "In the context of effective permissions, which source has the highest priority (overrides all others)?",
    options: ["Inherited Allow permissions", "Group membership Allow permissions", "Explicit Allow permissions", "Deny permissions from any source"],
    answer: 3
  },
  {
    id: 139,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A folder called 'Finance Reports' has inheritance enabled. A child folder 'Q4 Data' has no explicit permissions set. A user in the Finance group has Read access on 'Finance Reports.' What access does the user have on 'Q4 Data'?",
    options: ["No access — child folders start empty", "Read — inherited from the Finance Reports parent", "Full Control — NTFS default for child folders", "Modify — inherited permission is upgraded for subfolders"],
    answer: 1
  },
  {
    id: 140,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "What is the key difference between explicit permissions and inherited permissions?",
    options: ["Explicit permissions are temporary; inherited are permanent", "Explicit permissions are assigned directly to the object; inherited flow automatically from a parent", "Explicit permissions apply only over the network; inherited apply locally", "There is no difference — they work identically"],
    answer: 1
  },
  {
    id: 141,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "ABE is described as a 'usability and awareness layer.' What does this mean?",
    options: ["It replaces NTFS permissions for simpler management", "It makes the shared folder interface look different for each user role", "It improves user experience by showing only relevant folders, but NTFS permissions remain the real security control", "It automatically assigns permissions based on user role"],
    answer: 2
  },
  {
    id: 142,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which of the following correctly describes the flow of NTFS permission inheritance?",
    options: ["File → Subfolder → Parent Folder", "Parent Folder → Subfolder → File", "Subfolder → File → Parent Folder", "Admin → File → Parent Folder"],
    answer: 1
  },
  {
    id: 143,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A new admin disables inheritance on the 'HR' folder and chooses to remove all inherited permissions when prompted. What is the result?",
    options: ["The HR folder retains all previous permissions unchanged", "The HR folder now has no permissions — they must be reassigned manually", "The parent folder also loses its permissions", "Inherited permissions are automatically converted to Deny"],
    answer: 1
  },
  {
    id: 144,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A user is a member of Group A (Allow Read) and Group B (Allow Write). No Deny permissions exist. What is the effective permission?",
    options: ["Read only — the least permissive applies", "Write only — the last group applied wins", "Read and Write — permissions from all groups are combined", "No access — conflicting group permissions cancel out"],
    answer: 2
  },
  {
    id: 145,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "What happens when ABE is enabled and a user tries to access a hidden folder using a direct UNC path they somehow know?",
    options: ["The folder is still accessible via UNC even if hidden by ABE", "NTFS permissions still control access — if the user has no permission, access is denied regardless", "ABE blocks UNC access completely", "The folder becomes permanently visible to the user"],
    answer: 1
  },
  {
    id: 146,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which Windows Server feature filters the shared folder view based on each individual user's access rights?",
    options: ["Group Policy Object (GPO)", "NTFS Auditing", "Access-Based Enumeration (ABE)", "Distributed File System (DFS)"],
    answer: 2
  },
  {
    id: 147,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "An admin sets 'Allow Full Control' on a parent folder for the Everyone group with inheritance enabled. Later, a Deny Read is placed on one specific subfolder for the Everyone group. What is the effective permission on the subfolder for all users?",
    options: ["Full Control — parent permission overrides subfolder Deny", "Deny Read — the explicit Deny on the subfolder takes precedence", "Read only — the permissions average out", "No change — Deny can only be set on individual user accounts"],
    answer: 1
  },
  {
    id: 148,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Why might an organization prefer ABE over simply leaving all folders visible?",
    options: ["ABE reduces server storage costs", "ABE improves security awareness by hiding folders users have no business knowing about, reducing unauthorized access attempts", "ABE automatically encrypts folders it hides", "ABE speeds up file transfers by reducing visible folders"],
    answer: 1
  },
  {
    id: 149,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which permission rule is considered the 'most powerful' in NTFS?",
    options: ["Explicit Allow", "Inherited Allow", "Group Allow", "Deny (from any source)"],
    answer: 3
  },
  {
    id: 150,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "What are the four main sources that contribute to a user's effective permissions?",
    options: ["Local, Network, Domain, Cloud", "Explicit, Inherited, Group Memberships, Deny", "Read, Write, Execute, Full Control", "Share, NTFS, GPO, Registry"],
    answer: 1
  },
  {
    id: 151,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "A company has 500 employees. 490 employees need access to most shared folders, but 10 senior executives have exclusive folders. ABE is enabled. What experience do regular employees have?",
    options: ["They see all folders but cannot open executive folders", "They see only their own folders and the common folders — executive folders are hidden", "They see no folders at all until ABE is disabled", "They see all folders labeled with access level badges"],
    answer: 1
  },
  {
    id: 152,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "In NTFS, if a file is moved from one folder to another on the SAME volume and the destination has different permissions, what happens to the file's permissions?",
    options: ["The file retains its original permissions", "The file inherits the destination folder's permissions", "The file loses all permissions", "The file keeps both sets of permissions combined"],
    answer: 0
  },
  {
    id: 153,
    section: "Advanced Permissions & ABE",
    type: "mcq",
    question: "Which term describes a Deny permission that is specifically and manually placed on an individual user or group, rather than inherited?",
    options: ["Inherited Deny", "System Deny", "Explicit Deny", "Group Deny"],
    answer: 2
  },
  {
    id: 154,
    section: "Advanced Permissions & ABE",
    type: "essay",
    question: "A school server has a shared folder 'Students' with inheritance enabled. Inside it are subfolders per subject: Math, Science, English. A student named Mark is in all subject groups. The admin needs Mark to access Math and Science but NOT English. Describe the two methods that could achieve this and explain the pros and cons of each."
  },
  // SECTION M - Storage & RAID (SAM Topic 09)
  {
    id: 155,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the primary characteristic of local storage compared to other storage methods?",
    options: ["Data is accessible from anywhere via the internet", "Data is stored directly on the user's own machine with fast access but no redundancy", "Data is shared automatically with all users on the network", "Data is managed by a third-party vendor"],
    answer: 1
  },
  {
    id: 156,
    section: "Storage & RAID",
    type: "mcq",
    question: "Which storage solution acts like a 'personal cloud on-premises' allowing multiple users to access shared folders over a network?",
    options: ["Local Storage (HDD/SSD)", "Storage Area Network (SAN)", "Network Attached Storage (NAS)", "Cloud Storage"],
    answer: 2
  },
  {
    id: 157,
    section: "Storage & RAID",
    type: "mcq",
    question: "What type of storage is described as block-level, appears as a local disk to servers, and is used in enterprises for databases and virtual machines?",
    options: ["NAS", "Cloud Storage", "Local HDD", "Storage Area Network (SAN)"],
    answer: 3
  },
  {
    id: 158,
    section: "Storage & RAID",
    type: "mcq",
    question: "Which of the following is an example of off-site cloud storage?",
    options: ["Internal NAS device", "External USB drive", "Azure Files or AWS S3", "Local server rack"],
    answer: 2
  },
  {
    id: 159,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the main advantage of off-site storage over on-site storage?",
    options: ["Lower latency and faster access", "Full physical control over hardware", "Protection from local disasters such as fire or flood", "Lower long-term cost in all scenarios"],
    answer: 2
  },
  {
    id: 160,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the best practice when designing a storage solution?",
    options: ["Use only cloud storage to avoid hardware maintenance", "Use only on-site storage for maximum control", "Use BOTH on-site for speed and off-site for disaster recovery", "Use SAN exclusively for all data types"],
    answer: 2
  },
  {
    id: 161,
    section: "Storage & RAID",
    type: "mcq",
    question: "What does an Intelligent Storage System's 'auto-tiering' feature do?",
    options: ["Manually moves data to different drives when told by an admin", "Automatically moves frequently accessed data to fast SSDs and cold data to cheaper HDDs or tape", "Compresses all data automatically to save space", "Encrypts data based on access frequency"],
    answer: 1
  },
  {
    id: 162,
    section: "Storage & RAID",
    type: "mcq",
    question: "In an Intelligent Storage System, what is 'thin provisioning'?",
    options: ["Allocating the full physical storage space immediately when a volume is created", "Allocating storage on demand — physical space is used only as data is written", "Compressing data to fit more on a single disk", "Creating multiple partitions on one physical drive"],
    answer: 1
  },
  {
    id: 163,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the purpose of 'caching' in an Intelligent Storage System?",
    options: ["Creating point-in-time copies for backup purposes", "Storing frequently accessed data in fast memory to speed up read performance", "Encrypting sensitive data at rest", "Automating migration of cold data to tape storage"],
    answer: 1
  },
  {
    id: 164,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is a 'snapshot' in the context of Intelligent Storage Systems?",
    options: ["A full backup copy that duplicates all data", "A photograph of the server rack for documentation", "A near-instant point-in-time copy of data used for backup and recovery", "An alert generated when storage exceeds 90% capacity"],
    answer: 2
  },
  {
    id: 165,
    section: "Storage & RAID",
    type: "mcq",
    question: "What does RAID stand for?",
    options: ["Redundant Array of Independent Disks", "Rapid Access and Integrated Data", "Remote Array of Internal Drives", "Redundant Application Interface Design"],
    answer: 0
  },
  {
    id: 166,
    section: "Storage & RAID",
    type: "mcq",
    question: "In RAID terminology, what does 'striping' mean?",
    options: ["Duplicating data identically on two drives", "Splitting data across multiple drives so reads/writes happen in parallel", "Calculating a checksum across drives for error recovery", "Encrypting data before writing to disk"],
    answer: 1
  },
  {
    id: 167,
    section: "Storage & RAID",
    type: "mcq",
    question: "What does 'parity' provide in a RAID system?",
    options: ["Exact duplicate copies of data on separate drives", "A mathematical checksum that allows data to be recovered if a drive fails", "Compression of data across all drives", "Automatic partitioning of drives for organization"],
    answer: 1
  },
  {
    id: 168,
    section: "Storage & RAID",
    type: "mcq",
    question: "How many drives are required at minimum for RAID 0?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    id: 169,
    section: "Storage & RAID",
    type: "mcq",
    question: "What happens to all data in a RAID 0 array if one drive fails?",
    options: ["Only data on the failed drive is lost; other drives are unaffected", "The system automatically rebuilds data from parity", "All data in the array is lost — RAID 0 has no fault tolerance", "The drive is replaced and data is recovered from mirroring"],
    answer: 2
  },
  {
    id: 170,
    section: "Storage & RAID",
    type: "mcq",
    question: "Which RAID level provides an exact duplicate of all data and can tolerate one drive failure?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    answer: 1
  },
  {
    id: 171,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the minimum number of drives required for RAID 5?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    id: 172,
    section: "Storage & RAID",
    type: "mcq",
    question: "RAID 5 is described as the 'most common in servers.' What makes it the preferred balance?",
    options: ["It provides zero-downtime recovery and uses 100% capacity", "It balances speed, storage efficiency, and redundancy with only one drive of overhead", "It mirrors all data for maximum safety", "It provides the fastest write speeds of any RAID level"],
    answer: 1
  },
  {
    id: 173,
    section: "Storage & RAID",
    type: "mcq",
    question: "How many drive failures can RAID 6 tolerate simultaneously?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    id: 174,
    section: "Storage & RAID",
    type: "mcq",
    question: "RAID 10 combines which two RAID methods?",
    options: ["Parity and Striping", "Mirroring and Striping", "Mirroring and Parity", "Striping and Compression"],
    answer: 1
  },
  {
    id: 175,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the minimum number of drives required for RAID 10?",
    options: ["2", "3", "4", "6"],
    answer: 2
  },
  {
    id: 176,
    section: "Storage & RAID",
    type: "mcq",
    question: "What is the usable storage capacity of a 4-drive RAID 1 array where each drive is 2 TB?",
    options: ["8 TB", "4 TB", "2 TB", "1 TB"],
    answer: 2
  },
  {
    id: 177,
    section: "Storage & RAID",
    type: "mcq",
    question: "A company runs a large database server requiring both high speed and data protection. Drives are expensive. Which RAID level is the BEST fit?",
    options: ["RAID 0 — maximum speed", "RAID 1 — simple mirroring", "RAID 5 — balanced for file servers", "RAID 10 — high performance and redundancy for databases"],
    answer: 3
  },
  {
    id: 178,
    section: "Storage & RAID",
    type: "mcq",
    question: "A video production studio needs maximum read/write speed for editing large uncompressed video files. The data can easily be re-captured if lost. Which RAID level is most appropriate?",
    options: ["RAID 6 — maximum fault tolerance", "RAID 0 — pure speed, no redundancy needed", "RAID 1 — mirroring for safety", "RAID 10 — fastest with protection"],
    answer: 1
  },
  {
    id: 179,
    section: "Storage & RAID",
    type: "mcq",
    question: "A backup server needs maximum fault tolerance because losing backup data defeats its entire purpose. Which RAID level should be used?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    answer: 3
  },
  {
    id: 180,
    section: "Storage & RAID",
    type: "mcq",
    question: "Why is RAID 6 preferred over RAID 5 when drives are very large (e.g., 16 TB each)?",
    options: ["RAID 6 is faster than RAID 5 for large drives", "Rebuilding a large failed drive takes a long time, increasing the risk of a second failure; RAID 6 tolerates 2 failures", "RAID 6 uses less storage overhead than RAID 5", "Large drives cannot be used in RAID 5 arrays"],
    answer: 1
  },
  {
    id: 181,
    section: "Storage & RAID",
    type: "mcq",
    question: "Which storage type is described as having 'high latency — internet dependent' as a characteristic?",
    options: ["Local Storage", "NAS", "SAN", "Cloud Storage / Off-site"],
    answer: 3
  },
  {
    id: 182,
    section: "Storage & RAID",
    type: "mcq",
    question: "What does an Intelligent Storage System do with 'hot' data versus 'cold' data?",
    options: ["Deletes cold data automatically after 30 days", "Encrypts hot data and compresses cold data", "Moves hot data to fast SSDs and cold data to cheaper HDDs or tape", "Backs up hot data offsite and stores cold data locally"],
    answer: 2
  },
  {
    id: 183,
    section: "Storage & RAID",
    type: "mcq",
    question: "A 1 TB volume is created using thin provisioning but only 200 GB of data has been written. How much physical storage space is actually consumed?",
    options: ["1 TB — the full volume size is always reserved", "200 GB — only what has actually been written", "500 GB — thin provisioning allocates 50% upfront", "0 GB — thin provisioning stores nothing until accessed"],
    answer: 1
  },
  {
    id: 184,
    section: "Storage & RAID",
    type: "mcq",
    question: "Which RAID level has 100% usable capacity but zero fault tolerance?",
    options: ["RAID 1", "RAID 5", "RAID 0", "RAID 10"],
    answer: 2
  },
  {
    id: 185,
    section: "Storage & RAID",
    type: "mcq",
    question: "RAID 10 uses what percentage of raw disk capacity for usable storage?",
    options: ["100%", "75%", "67%", "50%"],
    answer: 3
  },
  {
    id: 186,
    section: "Storage & RAID",
    type: "mcq",
    question: "A student is confused: 'My NAS says it has 8 TB of storage but I configured RAID 5 with 4 x 2 TB drives. How much space do I actually have?' What is the correct answer?",
    options: ["8 TB — all drives are fully available", "2 TB — only one drive is usable", "6 TB — one drive's worth is used for parity", "4 TB — half is used for redundancy"],
    answer: 2
  },
  {
    id: 187,
    section: "Storage & RAID",
    type: "essay",
    question: "Your company stores critical financial records on a file server. Management asks you to recommend a RAID configuration. Write a recommendation that justifies your choice of RAID level, explains the trade-offs in capacity and cost, and describes what happens when a drive fails."
  },
  // SECTION N - High Availability & Fault Tolerance (SAM Topic 10)
  {
    id: 188,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What does 'High Availability' primarily aim to achieve in a system design?",
    options: ["Zero downtime under all failure conditions", "Maximize uptime and minimize interruptions, typically measured as a percentage", "Reduce hardware costs by using fewer servers", "Increase network bandwidth to all users"],
    answer: 1
  },
  {
    id: 189,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "A system advertises '99.99% availability.' Approximately how much downtime per year does this allow?",
    options: ["3.65 days", "8.76 hours", "52.6 minutes", "5.26 minutes"],
    answer: 2
  },
  {
    id: 190,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is the key difference between High Availability and Fault Tolerance?",
    options: ["HA uses hardware redundancy; FT uses software redundancy only", "HA minimizes downtime with possible brief interruptions; FT maintains zero downtime even during a failure", "HA is for web servers; FT is for database servers only", "HA is more expensive than FT in all scenarios"],
    answer: 1
  },
  {
    id: 191,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which of the following is an example of geographic redundancy?",
    options: ["Duplicate power supplies in one server", "Multiple network cards in one machine", "Multiple data centers located in different geographic regions", "RAID 6 configuration across one server rack"],
    answer: 2
  },
  {
    id: 192,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What does N+1 redundancy mean?",
    options: ["Double all components — run two complete systems", "For every N components required, deploy one extra spare", "Have M spares for N components needed", "Two full systems plus one spare"],
    answer: 1
  },
  {
    id: 193,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which redundancy model is used in mission-critical environments such as stock exchanges and air traffic control?",
    options: ["N+1", "N+M", "2N", "2N+1"],
    answer: 3
  },
  {
    id: 194,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What does MTBF stand for and what does it measure?",
    options: ["Maximum Time Between Faults — the longest a system has ever run", "Mean Time Between Failures — the average time a component runs before failing", "Minimum Time Before Failover — the fastest a backup can take over", "Measured Time Before Fix — how long repairs have historically taken"],
    answer: 1
  },
  {
    id: 195,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What does MTTR stand for?",
    options: ["Maximum Total Transfer Rate", "Mean Time To Repair — how long it takes to fix a failed component", "Maximum Throughput To Router", "Mean Time To Respond to alerts"],
    answer: 1
  },
  {
    id: 196,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Using the formula Availability = MTBF / (MTBF + MTTR), a server has MTBF = 8,760 hrs and MTTR = 4 hrs. What is the approximate availability?",
    options: ["99.00%", "99.50%", "99.95%", "99.99%"],
    answer: 2
  },
  {
    id: 197,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is RTO (Recovery Time Objective)?",
    options: ["The maximum data loss measured in time that is acceptable", "The maximum time allowed to restore service after a failure", "The minimum number of backup servers required", "The rate at which data is replicated to off-site storage"],
    answer: 1
  },
  {
    id: 198,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is RPO (Recovery Point Objective)?",
    options: ["The maximum acceptable downtime after a system failure", "The maximum acceptable data loss measured in time", "The number of recovery points stored per day", "The physical location of the backup server"],
    answer: 1
  },
  {
    id: 199,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "A company's RPO is set to 1 hour. The primary server fails. The most recent backup is from 45 minutes ago. Is the RPO met?",
    options: ["No — 45 minutes of data loss exceeds the RPO", "Yes — 45 minutes is within the 1-hour RPO window", "No — RPO requires zero data loss", "Yes — but only if the RTO is also under 1 hour"],
    answer: 1
  },
  {
    id: 200,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is the purpose of a load balancer in a high availability architecture?",
    options: ["To store backup data across multiple drives", "To distribute client requests across multiple servers, preventing any single server from being overwhelmed", "To authenticate users before granting access to resources", "To replicate data between primary and backup servers"],
    answer: 1
  },
  {
    id: 201,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which load balancing algorithm distributes requests in order — Server 1, Server 2, Server 3, then repeats?",
    options: ["Least Connections", "IP Hash", "Weighted Round Robin", "Round Robin"],
    answer: 3
  },
  {
    id: 202,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "In which scenario is the 'Least Connections' load balancing algorithm most appropriate?",
    options: ["When all servers have identical hardware capacity", "When requests vary greatly in processing time and some servers become more loaded than others", "When clients must always connect to the same server for session persistence", "When the load balancer has limited processing power"],
    answer: 1
  },
  {
    id: 203,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which load balancing algorithm ensures the same client always connects to the same server?",
    options: ["Round Robin", "Weighted Round Robin", "Least Connections", "IP Hash"],
    answer: 3
  },
  {
    id: 204,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is a failover cluster in Windows Server?",
    options: ["A cluster where all nodes process requests simultaneously for maximum speed", "A group of nodes where if the primary node fails, a secondary automatically takes over to maintain service", "A cluster used exclusively for scientific high-performance computing", "A cluster that distributes storage across nodes without any redundancy"],
    answer: 1
  },
  {
    id: 205,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is a Network Load Balancing (NLB) cluster used for?",
    options: ["Ensuring one server handles all requests so others are on standby", "Sharing computational load across all active nodes simultaneously, used for web and app servers", "Providing off-site backup for all cluster nodes", "Synchronizing Active Directory between domain controllers"],
    answer: 1
  },
  {
    id: 206,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What type of cluster is used for scientific calculations, AI training, and rendering — where all nodes collaborate on one large computation?",
    options: ["Failover Cluster", "Load Balancing Cluster (NLB)", "High-Performance Cluster (HPC)", "Geographic Cluster"],
    answer: 2
  },
  {
    id: 207,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is synchronous replication?",
    options: ["Data is written to the primary first, then copied to the replica on a schedule", "Data is written to both the primary and the replica simultaneously — no data loss is possible", "Data is replicated only during off-peak hours to reduce bandwidth", "Data is compressed before being replicated to save bandwidth"],
    answer: 1
  },
  {
    id: 208,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which replication type is described as having 'some potential data loss' but lower latency, used for disaster recovery sites?",
    options: ["Synchronous replication", "Semi-synchronous replication", "Asynchronous replication", "Geographic replication"],
    answer: 2
  },
  {
    id: 209,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "A 'Hot Standby' failover system means:",
    options: ["The standby server is powered off and needs hours of setup before it can take over", "The standby server is partially running and can take over within minutes", "The standby server is fully running and can take over instantly", "The standby server is located off-site and managed by a third party"],
    answer: 2
  },
  {
    id: 210,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which backup type copies ALL data every time it runs, is slowest to perform, but fastest to restore?",
    options: ["Incremental backup", "Differential backup", "Mirror backup", "Full backup"],
    answer: 3
  },
  {
    id: 211,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "An incremental backup copies which data?",
    options: ["All data every time", "Only data changed since the last FULL backup", "Only data changed since the last backup of any type", "An exact mirror of the source data"],
    answer: 2
  },
  {
    id: 212,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "A differential backup copies which data?",
    options: ["All data every time", "Data changed since the last backup of any type", "Data changed since the last FULL backup", "Only new files, not modified files"],
    answer: 2
  },
  {
    id: 213,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is the 3-2-1 backup rule?",
    options: ["3 full backups, 2 off-site copies, 1 cloud copy", "3 copies of data, on 2 different media types, with 1 copy off-site", "3 backup servers, 2 data centers, 1 primary server", "3 daily backups, 2 weekly backups, 1 monthly backup"],
    answer: 1
  },
  {
    id: 214,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "An admin follows the 3-2-1 rule. They have one local HDD copy, one copy on a NAS device, and one copy on Azure Backup. A fire destroys the entire office. Which copies survive?",
    options: ["None — all three copies are in the same building", "All three — HDD, NAS, and Azure are always in different locations", "Only the Azure copy — it is stored off-site", "Only the NAS copy — it has redundancy built in"],
    answer: 2
  },
  {
    id: 215,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What is a significant risk of using a mirror backup compared to other backup types?",
    options: ["Mirror backups are the slowest to restore", "Mirror backups require the most storage space", "Deleted files on the source are also deleted from the mirror, with no version history", "Mirror backups cannot be stored off-site"],
    answer: 2
  },
  {
    id: 216,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "A company takes a full backup every Sunday. On Thursday a ransomware attack encrypts all files. Using an incremental backup strategy (backups run Monday–Saturday), how many backup sets are needed to fully restore?",
    options: ["One — only Thursday's incremental is needed", "Two — Sunday full + Thursday incremental", "Four — Sunday full + Monday + Tuesday + Wednesday + Thursday incrementals", "One — the full backup alone is sufficient"],
    answer: 2
  },
  {
    id: 217,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "Which load balancing type is described as more intelligent, supporting HTTP headers and cookies for routing decisions?",
    options: ["Layer 2 load balancing", "Layer 4 (TCP/IP level) load balancing", "Layer 7 (Application level) load balancing", "Layer 3 (Network level) load balancing"],
    answer: 2
  },
  {
    id: 218,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "What does 2N redundancy mean in high availability design?",
    options: ["Two spare components for every one needed", "Fully duplicate everything — run two complete, independent systems", "Two nines of availability (99%)", "Double the network bandwidth of all components"],
    answer: 1
  },
  {
    id: 219,
    section: "High Availability & Fault Tolerance",
    type: "mcq",
    question: "A hospital's critical patient monitoring system goes down. Staff notice instantly but there is a 3-minute service interruption before the backup system restores service. Which concept best describes this system's failure characteristic?",
    options: ["Fault Tolerant — no downtime occurred", "High Availability — downtime was minimized but not zero", "Load Balanced — traffic was redistributed during failure", "Asynchronously replicated — data was out of sync for 3 minutes"],
    answer: 1
  },
  {
    id: 220,
    category: "New",
    section: "High Availability & Fault Tolerance",
    type: "essay",
    question: "A startup is launching a critical e-commerce website expecting 100,000 daily users. Describe a complete High Availability architecture for their web tier. Include: the load balancing algorithm you would choose and why, the type of cluster you would use, your replication strategy, and the backup approach following the 3-2-1 rule."
  },
  // SECTION O - Prefinal Exam (IDs 221-314)
  {
    id: 221,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What happens when a DHCP client connects to the network?",
    options: ["It assigns itself an IP address", "It disables its network adapter", "It requests parameters from the DHCP server", "It contacts a DNS server directly"],
    answer: 2
  },
  {
    id: 222,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A shared folder has 'Full Control' share permission for Everyone but the folder also has NTFS 'Read' for Everyone. A network user tries to delete a file. What happens?",
    options: ["The user can delete because share permission is Full Control", "The user cannot delete because NTFS Read is more restrictive and takes precedence", "The user needs to be in the Administrators group to delete", "The user can delete because share permissions always win"],
    answer: 1
  },
  {
    id: 223,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the advantage of a mapped drive?",
    options: ["Increased security", "Easier and persistent access", "Offline browsing", "Reduced permissions"],
    answer: 1
  },
  {
    id: 224,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A user has 'Change' share permission and 'Read' NTFS permission on a folder. What is the effective access?",
    options: ["Full Control", "Change", "Read", "No Access"],
    answer: 2
  },
  {
    id: 225,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is local sharing?",
    options: ["Sharing over the internet", "Sharing within the same local network"],
    answer: 1
  },
  {
    id: 226,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the difference between share permissions and NTFS permissions?",
    options: ["Share permissions apply only to local users; NTFS applies to network users", "Share permissions apply only when accessing over the network; NTFS applies both locally and over the network", "They are identical and interchangeable", "NTFS permissions only apply to administrators"],
    answer: 1
  },
  {
    id: 227,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A user belongs to Group A (Allow Modify) and Group B (Deny Write). What is the effective NTFS Write permission?",
    options: ["Allow — because Modify overrides Deny", "Deny — because Deny always wins over Allow", "Allow — because Group A is applied first", "No permission — permissions cancel out"],
    answer: 1
  },
  {
    id: 228,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission allows deleting files?",
    options: ["Read", "Modify", "Execute", "View"],
    answer: 1
  },
  {
    id: 229,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What are inherited permissions?",
    options: ["Manually assigned permissions", "Permissions copied from parent objects", "Temporary session permissions", "Network-only permissions"],
    answer: 1
  },
  {
    id: 230,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What happens if Share permission is Read but NTFS is Full Control?",
    options: ["User gets Full Control", "User gets Read access", "User get Modify", "Access is denied"],
    answer: 1
  },
  {
    id: 231,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What happens if the DHCP server is unavailable?",
    options: ["Clients use any available", "Clients lose network access", "DNS automatically assigns IPs", "Routers replace the server"],
    answer: 1
  },
  {
    id: 232,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a DHCP lease?",
    options: ["A permanent IP address assignment", "A temporary IP address assignment with an expiration time", "A DNS record linked to an IP address", "A firewall rule permitting DHCP traffic"],
    answer: 1
  },
  {
    id: 233,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "In the command: find /home -type f -user john, what does -user john mean?",
    options: ["Run the command as user john", "Find files owned by the user named john", "Find files in the john subdirectory", "Filter results to files modified by john"],
    answer: 1
  },
  {
    id: 234,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Explicit permissions take priority over what?",
    options: ["Share permissions", "Firewall rules", "Inherited permissions", "Group policies"],
    answer: 2
  },
  {
    id: 235,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which system commonly uses domain-based sharing?",
    options: ["Standalone PC", "Workgroup only", "Windows Server Domain", "Home Network"],
    answer: 2
  },
  {
    id: 236,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission type applies even if the folder is not shared?",
    options: ["Share permission", "Network permission", "NTFS permission", "Guest permission"],
    answer: 2
  },
  {
    id: 237,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does DNS stand for and what is its primary function?",
    options: ["Data Network Service — stores user credentials", "Domain Name System — translates domain names to IP addresses", "Dynamic Name Server — assigns IP addresses dynamically", "Distributed Name Service — provides load balancing"],
    answer: 1
  },
  {
    id: 238,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a key benefit of network sharing in organizations?",
    options: ["Reduced security", "Improved collaboration", "Increased complexity", "Higher costs"],
    answer: 1
  },
  {
    id: 239,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What security group must an account belong to in order to manage DHCP on a Windows Server?",
    options: ["Domain Admins", "DHCP Administrators or Domain Admins", "Server Operators", "Backup Operators"],
    answer: 1
  },
  {
    id: 240,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which network layer does DHCP operate on according to the lesson?",
    options: ["Application", "Transport", "Network", "Physical"],
    answer: 0
  },
  {
    id: 241,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission set is needed for a user to be able to create new files in a folder but not delete them?",
    options: ["Modify", "Write (without Delete)", "Read & Execute", "Full Control"],
    answer: 1
  },
  {
    id: 242,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does the '$' at the end of a share name (e.g., C$) indicate?",
    options: ["It is a read-only administrative share", "It is a hidden share not visible when browsing the network", "It requires a password to access", "It is encrypted with BitLocker"],
    answer: 1
  },
  {
    id: 243,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What credentials are required to join a computer to a domain?",
    options: ["Local administrator credentials on the joining computer", "Domain Administrator or an account with permission to add computers to the domain", "The root password of the domain controller", "No credentials — it is automatic"],
    answer: 1
  },
  {
    id: 244,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A new system administrator runs systemctl restart sshd and gets 'Unit sshd.service not found'. What should they try?",
    options: ["Reboot the server", "Try systemctl restart ssh (without the d)", "Reinstall OpenSSH", "Use service restart sshd"],
    answer: 1
  },
  {
    id: 245,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A student runs: find /data -user alice but gets no results even though alice has files. What is the most likely cause?",
    options: ["The find command does not support -user on this system", "Alice's files are in a different directory not under /data", "The -user flag requires root privileges", "find only searches hidden files by default"],
    answer: 1
  },
  {
    id: 246,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "When NTFS and Share permissions are both applied, what rule applies?",
    options: ["NTFS overrides", "Share", "The most permissive applies", "The most restrictive applies"],
    answer: 3
  },
  {
    id: 247,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a practical use of inheritance?",
    options: ["Assign different permissions manually to every file", "Automatically apply permissions to child objects", "Remove permissions easily", "Encrypt files"],
    answer: 1
  },
  {
    id: 248,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does 'Full Control' share permission allow that 'Change' does NOT?",
    options: ["Create and delete files", "Read files", "Change share permissions on the shared folder", "Map a network drive"],
    answer: 2
  },
  {
    id: 249,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does DHCP stand for?",
    options: ["Dynamic Host Configuration Protocol", "Domain Host Control Protocol", "Dynamic Host Control Program", "Distributed Host Configuration Protocol"],
    answer: 0
  },
  {
    id: 250,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which PermitRootLogin value allows root to log in via SSH key but not password?",
    options: ["PermitRootLogin yes", "PermitRootLogin no", "PermitRootLogin without-password", "PermitRootLogin key-only"],
    answer: 2
  },
  {
    id: 251,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the relationship between DHCP and DNS in a network?",
    options: ["Both assign MAC addresses", "DHCP assigns IPs, DNS resolves names", "They are unrelated services", "DNS configures IP addresses"],
    answer: 1
  },
  {
    id: 252,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is Active Directory Domain Services (AD DS)?",
    options: ["A file server role for storing user documents", "A directory service that authenticates and authorizes users, computers, and resources in a Windows domain", "A VPN service for remote access", "A backup service for domain controllers"],
    answer: 1
  },
  {
    id: 253,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What happens to NTFS permissions when you COPY a file to a different NTFS folder?",
    options: ["The copy retains the source file's permissions", "The copy inherits the destination folder's permissions", "The copy has no permissions", "The copy requires manual permission assignment"],
    answer: 1
  },
  {
    id: 254,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the purpose of the DHCP relay agent?",
    options: ["It forwards DHCP requests across routers to a DHCP server on a different subnet", "It replicates DHCP scopes between servers", "It translates MAC addresses to IP addresses", "It assigns static IPs to servers"],
    answer: 0
  },
  {
    id: 255,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "When should explicit permissions be used?",
    options: ["When default access is enough", "When a file needs unique access control", "When sharing publicly", "For system folders only"],
    answer: 1
  },
  {
    id: 256,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a mapped drive?",
    options: ["A deleted partition", "A drive mapped to a network location", "A local hard disk", "A USB device"],
    answer: 1
  },
  {
    id: 257,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the difference between /etc/ssh/ssh_config and /etc/ssh/sshd_config?",
    options: ["They are identical files with different names", "ssh_config configures the SSH client; sshd_config configures the SSH server daemon", "sshd_config is for version 2 only; ssh_config is for version 1", "ssh_config is for root; sshd_config is for regular users"],
    answer: 1
  },
  {
    id: 258,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Why are permissions critical in file sharing?",
    options: ["They speed up computers", "They protect data integrity and security", "They reduce storage size", "They stop viruses automatically"],
    answer: 1
  },
  {
    id: 259,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a common mistake when assigning permissions?",
    options: ["Using Read access", "Assigning Full Control to everyone", "Applying least privilege", "Testing access"],
    answer: 1
  },
  {
    id: 260,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the difference between 'disjoin' and 'deleting' a computer account in Active Directory?",
    options: ["They are identical operations", "Disjoining removes the machine from the domain; deleting the AD account removes the object from AD — both should be done when decommissioning", "Deleting the AD account also removes the machine from the domain", "Disjoining requires domain admin rights; deleting does not"],
    answer: 1
  },
  {
    id: 261,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the purpose of 'Permission inheritance blocking' (disabling inheritance) on a folder?",
    options: ["To prevent files from being copied out of the folder", "To stop parent folder permissions from automatically applying to this folder", "To encrypt the folder's contents", "To prevent the folder from being shared"],
    answer: 1
  },
  {
    id: 262,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which tool in Windows Server is used to set share permissions on a folder?",
    options: ["Computer Management", "Active Directory Users and Computers", "Group Policy Management", "Disk Management"],
    answer: 0
  },
  {
    id: 263,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which built-in Windows group automatically has Full Control over all NTFS files by default?",
    options: ["Power Users", "Administrators", "Domain Users", "Network Service"],
    answer: 1
  },
  {
    id: 264,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does the 'Read & Execute' NTFS permission allow that 'Read' alone does NOT?",
    options: ["The ability to write to files", "The ability to traverse folders (pass through) and execute programs", "The ability to view file attributes", "The ability to read file contents"],
    answer: 1
  },
  {
    id: 265,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a DHCP scope?",
    options: ["A range of IP addresses that the DHCP server can assign to clients", "The maximum number of clients the server can support", "The time zone configuration for DHCP", "A backup server for DHCP failover"],
    answer: 0
  },
  {
    id: 266,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What are explicit permissions?",
    options: ["Automatically inherited permissions", "Permissions assigned directly to an object", "Default system permissions", "Temporary permissions"],
    answer: 1
  },
  {
    id: 267,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "NTFS permissions are enforced at what level?",
    options: ["Disk/file system level", "Router level", "Application layer", "Network layer"],
    answer: 0
  },
  {
    id: 268,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What SSH command would you use to connect to a server at IP 172.16.238.10 as user tony?",
    options: ["ssh 172.16.238.10 tony", "ssh tony -h 172.16.238.10", "ssh tony@172.16.238.10", "connect tony@172.16.238.10"],
    answer: 2
  },
  {
    id: 269,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "After editing sshd_config to disable root login, which command applies the change?",
    options: ["service ssh reload", "systemctl restart sshd", "reboot", "sshd -reload"],
    answer: 1
  },
  {
    id: 270,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the default behavior of permission inheritance?",
    options: ["Disabled", "Manual", "Automatic", "Random"],
    answer: 2
  },
  {
    id: 271,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does 'Take Ownership' NTFS special permission allow?",
    options: ["Assign permissions to other users", "Become the owner of the file or folder", "Delete the file permanently", "Grant Full Control to Domain Admins"],
    answer: 1
  },
  {
    id: 272,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What directive in sshd_config must be set to disable direct root login?",
    options: ["AllowRoot no", "RootLogin disable", "PermitRootLogin no", "DisableRoot yes"],
    answer: 2
  },
  {
    id: 273,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What component runs on each computer to request an IP address?",
    options: ["DHCP Server", "DNS Resolver", "DHCP Client", "Network Switch"],
    answer: 2
  },
  {
    id: 274,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the primary purpose of the find command?",
    options: ["To search for text inside files", "To locate files matching specific criteria such as owner or type", "To compress files into archives", "To copy files to a remote server"],
    answer: 1
  },
  {
    id: 275,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which is an example of direct network access method?",
    options: ["USB drive", "Cloud sync", "UNC path", "Optical disk"],
    answer: 2
  },
  {
    id: 276,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Why are NTFS permissions preferred in secure environments?",
    options: ["Easier setup", "More detailed access control", "Faster file access", "No inheritance"],
    answer: 1
  },
  {
    id: 277,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A folder has 'Deny Read' set for the Everyone group and 'Allow Read' for the user John. What can John do?",
    options: ["John can read because explicit user Allow overrides group Deny", "John cannot read because Deny always overrides Allow", "John can read because Deny only applies to the Everyone group", "John can read because he needs to be individually denied"],
    answer: 1
  },
  {
    id: 278,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does the -exec flag do in a find command?",
    options: ["Executes a new shell session", "Runs a specified command on each file found", "Lists file metadata", "Changes file permissions"],
    answer: 1
  },
  {
    id: 279,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Why must a DHCP server be authorized in Active Directory?",
    options: ["To assign it a static IP address", "To prevent rogue DHCP servers from providing incorrect network settings to clients", "To allow it to manage DNS records", "To grant it access to the domain controller"],
    answer: 1
  },
  {
    id: 280,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which NTFS permission is needed to run an executable (.exe) file?",
    options: ["Read", "Write", "Execute (Read & Execute)", "Modify"],
    answer: 2
  },
  {
    id: 281,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission is best for a user who should only view files?",
    options: ["Modify", "Read", "Change", "Full Control"],
    answer: 1
  },
  {
    id: 282,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which command verifies that the sshd service is currently running?",
    options: ["systemctl status sshd", "ps -ef sshd", "netstat -l sshd", "sshd --check"],
    answer: 0
  },
  {
    id: 283,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does UNC stand for in networking?",
    options: ["Unified Network Control", "Universal Naming Convention", "User Network Configuration", "Windows Network Control"],
    answer: 1
  },
  {
    id: 284,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission exists in Share permissions but not NTFS?",
    options: ["Read", "Modify", "Full Control", "Change"],
    answer: 3
  },
  {
    id: 285,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Why is it recommended to test a non-root SSH connection BEFORE logging out after disabling root login?",
    options: ["To confirm the server hostname is correct", "To ensure you are not locked out of the server if the change works correctly", "To verify that the sshd service has extra capacity", "To test if root can still connect via a different port"],
    answer: 1
  },
  {
    id: 286,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the minimum requirement for a computer to join a Windows Server domain?",
    options: ["The computer must be running Windows Server", "The computer must have a static IP address", "The computer must have network connectivity and DNS must resolve the domain", "The computer must already have a computer account in Active Directory"],
    answer: 2
  },
  {
    id: 287,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does NTFS 'Modify' permission include that 'Write' permission alone does NOT?",
    options: ["The ability to create files", "The ability to delete files", "The ability to read file attributes", "The ability to list folder contents"],
    answer: 1
  },
  {
    id: 288,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which command lists the contents of a .tar.gz archive WITHOUT extracting it?",
    options: ["tar -xzvf archive.tar.gz", "tar -tzvf archive.tar.gz", "tar -lzvf archive.tar.gz", "tar -cvzf archive.tar.gz"],
    answer: 1
  },
  {
    id: 289,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission allows viewing but not modifying files?",
    options: ["Full Control", "Modify", "Read", "Change"],
    answer: 2
  },
  {
    id: 290,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permissions must be managed carefully to avoid data loss?",
    options: ["Modify and Full Control", "Read", "List", "Execute"],
    answer: 0
  },
  {
    id: 291,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which Control Panel path is used to join a computer to a Windows domain?",
    options: ["Control Panel > Network > Advanced Settings", "System > Computer Name > Change > Domain", "Control Panel > User Accounts > Join Domain", "Administrative Tools > Active Directory Users and Computers"],
    answer: 1
  },
  {
    id: 292,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Why must -f be the LAST flag in tar -cvzf archive.tar.gz?",
    options: ["It is not required to be last; order is irrelevant", "Because -f is followed immediately by the filename argument", "Because -z must always come before -f", "Because the shell interprets flags right to left"],
    answer: 1
  },
  {
    id: 293,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the purpose of a DHCP exclusion range?",
    options: ["To block certain clients from getting an IP", "To reserve addresses within the scope that the server will NOT assign", "To define a secondary scope for another subnet", "To set a shorter lease time for specific devices"],
    answer: 1
  },
  {
    id: 294,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A student edits sshd_config and restarts sshd, but root can still log in. What is the most likely mistake?",
    options: ["They used systemctl start instead of restart", "The line PermitRootLogin no was commented out with #", "The sshd_config file was saved in the wrong directory", "root has a cron job that re-enables login"],
    answer: 1
  },
  {
    id: 295,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which mv command renames a file from report.tar.gz to backup_2024.tar.gz?",
    options: ["mv backup_2024.tar.gz report.tar.gz", "mv report.tar.gz backup_2024.tar.gz", "cp report.tar.gz backup_2024.tar.gz", "rename report.tar.gz backup_2024.tar.gz"],
    answer: 1
  },
  {
    id: 296,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "In Windows, which permission level on a shared folder allows users to read files but prevents them from making any changes?",
    options: ["Full Control", "Modify", "Read", "Contribute"],
    answer: 2
  },
  {
    id: 297,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Share permissions are enforced at what level?",
    options: ["File system", "Network level", "Application level", "Physical level"],
    answer: 1
  },
  {
    id: 298,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Why should computers be placed in specific Organizational Units (OUs) rather than left in the default Computers container?",
    options: ["The Computers container has a 100-object limit", "OUs allow Group Policy Objects to be applied selectively to those computers", "The Computers container is read-only", "Computers in the default container cannot authenticate"],
    answer: 1
  },
  {
    id: 299,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which permission grants complete control over a folder?",
    options: ["Read", "Change", "Modify", "Full Control"],
    answer: 3
  },
  {
    id: 300,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "An NTFS permission is set to 'Allow' on a parent folder with inheritance enabled. A child folder has no explicit permissions. What permissions does the child folder have?",
    options: ["No permissions (child folders start empty)", "The same Allow permissions inherited from the parent", "Full Control by default", "Only Administrators can access it"],
    answer: 1
  },
  {
    id: 301,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the best practice when combining NTFS and Share permissions?",
    options: ["Disable Share permissions", "Make both Full Control", "Ignore NTFS", "Use least privilege principle"],
    answer: 3
  },
  {
    id: 302,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A user can access a shared folder from one computer but not another. Both computers are in the same domain. What should you check first?",
    options: ["The user's password expiry", "Whether both computers can reach the file server and DNS resolves the server name", "Whether the user is in the Domain Admins group", "Whether the file server needs a reboot"],
    answer: 1
  },
  {
    id: 303,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What does systemctl enable sshd do?",
    options: ["Starts sshd immediately", "Allows sshd to accept connections on port 22", "Configures sshd to start automatically at system boot", "Upgrades the sshd package"],
    answer: 2
  },
  {
    id: 304,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "After joining a domain, what must happen for the computer to fully apply domain settings?",
    options: ["A gpupdate /force must be run", "The computer must be restarted", "The user must log out and back in", "The domain controller must be restarted"],
    answer: 1
  },
  {
    id: 305,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which file must be edited to disable root SSH login on a Linux server?",
    options: ["/etc/passwd", "/etc/ssh/ssh_config", "/etc/ssh/sshd_config", "/etc/shadow"],
    answer: 2
  },
  {
    id: 306,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is a Group Policy Object (GPO)?",
    options: ["A policy that restricts group membership in Active Directory", "A collection of settings that can be applied to users and computers in Active Directory", "A firewall rule group for network security", "A set of NTFS permissions applied to shared folders"],
    answer: 1
  },
  {
    id: 307,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "A company has computers in three different OUs: Sales, IT, and HR. A GPO is linked at the domain level with 'Block Inheritance' set on the IT OU. Which computers receive the domain-level GPO?",
    options: ["All computers in all three OUs", "Only computers in Sales and HR OUs", "Only computers in the IT OU", "No computers — Block Inheritance blocks all GPOs"],
    answer: 1
  },
  {
    id: 308,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What must be done to a DHCP scope before clients can receive leases from it?",
    options: ["Add a DNS record for the scope", "Activate (enable) the scope", "Reboot the DHCP server", "Grant Full Control to Domain Users"],
    answer: 1
  },
  {
    id: 309,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the purpose of an Organizational Unit (OU) in Active Directory?",
    options: ["To store groups of IP addresses for DHCP", "To organize AD objects and apply Group Policy to subsets of the domain", "To separate physical network segments", "To manage DNS zones"],
    answer: 1
  },
  {
    id: 310,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which role benefits most from understanding permissions?",
    options: ["End user", "Network gamer", "System administrator", "Casual user"],
    answer: 2
  },
  {
    id: 311,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What happens when inheritance is disabled?",
    options: ["Permissions reset automatically", "Child folder stops receiving parent permissions", "Files are deleted", "Network sharing is removed"],
    answer: 1
  },
  {
    id: 312,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What happens to NTFS permissions when you MOVE a file from one folder to another on the SAME NTFS volume?",
    options: ["The file retains its original permissions", "The file inherits the permissions of the destination folder", "The file loses all permissions", "The file keeps parent's permissions and adds destination permissions"],
    answer: 0
  },
  {
    id: 313,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "Which protocol is DHCP based on?",
    options: ["SMTP", "HTTP", "FTP", "BOOTP"],
    answer: 3
  },
  {
    id: 314,
    category: "Prefinal",
    section: "Prefinal Exam",
    type: "mcq",
    question: "What is the primary purpose of the find command?",
    options: ["To search for text inside files", "To locate files matching specific criteria such as owner or type", "To compress files into archives", "To copy files to a remote server"],
    answer: 1
  }
];

export const sections = ["All Topics", "Old Questions", "New Questions", "Prefinal Questions", "DHCP", "DNS", "File & Share Permissions", "Mixed Review", "Advanced Permissions & ABE", "Storage & RAID", "High Availability & Fault Tolerance"];
