export const questions = [
  // SECTION A - DHCP
  {
    id: 1,
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
  }
];

export const sections = ["All Topics", "DHCP", "DNS", "File & Share Permissions", "Mixed Review"];
