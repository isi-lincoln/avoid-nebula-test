#!/bin/bash

if [[ $EUID -ne 0 ]]; then
        echo "requires root access to run ansible playbook"
        exit 1
fi

ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook \
    --limit "!s" \
	-i .rvn/ansible-hosts -e 'ansible_python_interpreter=/usr/bin/python3' \
    -e "@ansible/vars/network-ips.yml" \
    -e "@ansible/vars/ziti-ips.yml" \
    ansible/tasks/install_openziti_overlay.yml